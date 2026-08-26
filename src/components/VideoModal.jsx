import { useEffect, useRef, useState } from 'react'
import { phaseThemes } from '../data/roadmap'

const VIDEO_RATIO = 16 / 9
const DRAG_EXPAND_THRESHOLD = 50 // px of upward drag before it snaps to expanded
const DRAG_COLLAPSE_THRESHOLD = 50 // px of downward drag before it snaps back

// "Cover" sizing for the iframe — like CSS object-fit: cover, computed by
// hand because iframe doesn't reliably support object-fit across browsers.
// Scales the (fixed 16:9) video so BOTH dimensions meet or exceed the
// container, then the overflowing dimension is cropped by centering it —
// this is what eliminates the gap, trading a sliver of picture at the edges
// for zero visible bars, same tradeoff any "no letterbox" video UI makes.
function computeCoverSize(containerW, containerH) {
  const containerRatio = containerW / containerH
  if (containerRatio > VIDEO_RATIO) {
    const width = containerW
    return { width, height: width / VIDEO_RATIO }
  }
  const height = containerH
  return { width: height * VIDEO_RATIO, height }
}

// Extracts the bare video ID from any YouTube URL format, or returns the input as-is if it's already an ID.
// Handles: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID, youtube.com/shorts/ID, plain IDs
function extractVideoId(input) {
  if (!input) return ''
  const s = input.trim()
  // Already a plain ID (11 chars, no slashes or dots)
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s
  try {
    const url = new URL(s)
    // youtu.be/ID or youtu.be/ID?si=...
    if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('?')[0]
    // youtube.com/watch?v=ID
    const v = url.searchParams.get('v')
    if (v) return v
    // youtube.com/embed/ID or youtube.com/shorts/ID
    const parts = url.pathname.split('/')
    const embedIdx = parts.indexOf('embed')
    const shortsIdx = parts.indexOf('shorts')
    if (embedIdx !== -1) return parts[embedIdx + 1]
    if (shortsIdx !== -1) return parts[shortsIdx + 1]
  } catch {
    // Not a URL — return as-is (might be a bare ID that's not exactly 11 chars)
    return s
  }
  return s
}

export default function VideoModal({ topic, phaseId, onClose }) {
  const overlayRef = useRef(null)
  const iframeRef = useRef(null)
  const handleRef = useRef(null)
  const dragRef = useRef(null) // { startY, pointerId } while a drag is in progress
  const [isExpanded, setIsExpanded] = useState(false)
  const [dragOffset, setDragOffset] = useState(0) // live finger-follow offset while dragging
  const videoId = extractVideoId(topic.videoId)
  const hasVideo = videoId !== ''
  const theme = phaseThemes[phaseId]

  // Custom drag-to-expand, independent of YouTube's own fullscreen button.
  // The drag has to start on our own `handleRef` element (never on the
  // iframe itself) because pointer events landing directly on a cross-origin
  // iframe are handed off to that iframe's own document and never reach our
  // listeners. Once the drag starts, `setPointerCapture` keeps every
  // subsequent move/up event routed to the handle regardless of where the
  // finger physically travels — including on top of the iframe — which is
  // what makes dragging over the video area work at all.
  useEffect(() => {
    const handle = handleRef.current
    if (!handle) return

    const onPointerDown = (e) => {
      dragRef.current = { startY: e.clientY, pointerId: e.pointerId }
      try { handle.setPointerCapture(e.pointerId) } catch { /* no active pointer to capture — rare, non-fatal */ }
    }
    const onPointerMove = (e) => {
      const drag = dragRef.current
      if (!drag || drag.pointerId !== e.pointerId) return
      const delta = e.clientY - drag.startY
      // Dragging up (negative delta) only matters while collapsed; dragging
      // down (positive delta) only matters while expanded — clamp so the
      // handle doesn't visually run away past what a drag can actually do.
      setDragOffset(isExpanded ? Math.max(0, delta) : Math.min(0, delta))
    }
    const endDrag = (e) => {
      const drag = dragRef.current
      if (!drag || drag.pointerId !== e.pointerId) return
      const delta = e.clientY - drag.startY
      const TAP_THRESHOLD = 8
      if (Math.abs(delta) < TAP_THRESHOLD) {
        setIsExpanded((prev) => !prev) // a plain tap on the handle also toggles
      } else if (!isExpanded && delta <= -DRAG_EXPAND_THRESHOLD) {
        setIsExpanded(true)
      } else if (isExpanded && delta >= DRAG_COLLAPSE_THRESHOLD) {
        setIsExpanded(false)
      }
      dragRef.current = null
      setDragOffset(0)
      try { handle.releasePointerCapture(e.pointerId) } catch { /* already released */ }
    }

    handle.addEventListener('pointerdown', onPointerDown)
    handle.addEventListener('pointermove', onPointerMove)
    handle.addEventListener('pointerup', endDrag)
    handle.addEventListener('pointercancel', endDrag)
    return () => {
      handle.removeEventListener('pointerdown', onPointerDown)
      handle.removeEventListener('pointermove', onPointerMove)
      handle.removeEventListener('pointerup', endDrag)
      handle.removeEventListener('pointercancel', endDrag)
    }
  }, [isExpanded])

  // While expanded, size the IFRAME (not its clipping container, which must
  // stay exactly viewport-sized) to "cover" the real viewport — overflowing
  // on one axis, centered by the container's flex+overflow-hidden, which is
  // what crops it instead of letterboxing. Kept correct through rotation.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!isExpanded || !iframe) return

    const applyCoverSize = () => {
      const { width, height } = computeCoverSize(window.innerWidth, window.innerHeight)
      iframe.style.width = `${width}px`
      iframe.style.height = `${height}px`
      iframe.style.flexShrink = '0'
    }
    applyCoverSize()
    window.addEventListener('resize', applyCoverSize)
    window.addEventListener('orientationchange', applyCoverSize)
    return () => {
      window.removeEventListener('resize', applyCoverSize)
      window.removeEventListener('orientationchange', applyCoverSize)
      // Clear back to the normal (non-expanded) sizing rules.
      iframe.style.width = ''
      iframe.style.height = ''
      iframe.style.flexShrink = ''
    }
  }, [isExpanded])

  // A pinch (or double-tap) landing on the video can't be intercepted by our
  // JS at all — touches over a cross-origin iframe are delivered entirely to
  // that iframe's own document, never to ours (true for any iframe, not a
  // security restriction we can request around). Left alone, the browser's
  // fallback is its own native page-zoom, which zooms the whole rendered
  // page rather than the video specifically — that's the "zooms the entire
  // video instead of fitting it to the screen" bug. The fix is to disable
  // browser-native pinch/double-tap zoom while our custom fullscreen view is
  // open, via the same viewport-meta mechanism a page normally uses to opt
  // out of zoom, so the video is guaranteed to stay exactly fit to the
  // screen — this does NOT add pinch-to-zoom (not achievable on top of a
  // cross-origin iframe without replacing YouTube's own player controls
  // entirely — see the earlier evaluation), it only prevents the broken
  // zoom from happening. Scoped to only while expanded and restored on
  // collapse/close, so normal zoom behavior everywhere else in the app —
  // including the non-expanded video modal — is completely unaffected.
  useEffect(() => {
    if (!isExpanded) return
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (!viewportMeta) return
    const original = viewportMeta.getAttribute('content')
    viewportMeta.setAttribute('content', `${original}, maximum-scale=1, user-scalable=no`)
    return () => { viewportMeta.setAttribute('content', original) }
  }, [isExpanded])

  // Mobile browsers (mainly iOS Safari) can leave the fullscreened video
  // undersized — with visible gaps — after a landscape rotation, because the
  // fullscreen element's box isn't reliably recalculated from CSS alone on
  // rotation. Forcing the iframe's actual pixel size from JS on every
  // resize/orientation change while fullscreen is active is the standard
  // workaround; the inline size is cleared again on exiting fullscreen so
  // the iframe goes back to filling its normal 16:9 box in the modal.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const isFullscreen = () =>
      document.fullscreenElement === iframe || document.webkitFullscreenElement === iframe

    const syncSize = () => {
      if (!isFullscreen()) return
      iframe.style.width = `${window.innerWidth}px`
      iframe.style.height = `${window.innerHeight}px`
    }

    const handleFullscreenChange = () => {
      if (isFullscreen()) {
        syncSize()
      } else {
        iframe.style.width = ''
        iframe.style.height = ''
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    window.addEventListener('resize', syncSize)
    window.addEventListener('orientationchange', syncSize)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      window.removeEventListener('resize', syncSize)
      window.removeEventListener('orientationchange', syncSize)
    }
  }, [])

  // Escape collapses the custom expanded view first, then closes the modal
  // on a second press — mirrors how Escape exits native fullscreen first.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== 'Escape') return
      if (isExpanded) setIsExpanded(false)
      else onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, isExpanded])

  // Prevent body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="video-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div className="video-modal-card relative bg-gray-900 shadow-2xl border-gray-700 overflow-hidden flex flex-col">

        {/* Modal header */}
        <div className={`flex items-start justify-between gap-3 px-5 py-4 border-b border-gray-800 ${theme.sectionBg}`}>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-mono font-bold ${theme.accent}`}>
                {topic.id}
              </span>
              <h2 className="text-lg font-bold text-white leading-tight">
                {topic.name}
              </h2>
            </div>
            <p className="mt-1 text-sm text-gray-400 leading-relaxed">
              {topic.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video area — fills whatever vertical space the header/footer leave
            (correct in both portrait and landscape phone orientations); on a
            genuinely large viewport (see .video-modal-video-area's media
            query) it becomes a fixed 16:9 box instead, matching the original
            desktop card look. Dragging the handle below expands it to a
            custom, cropped-to-fill fullscreen view we control ourselves
            (see the isExpanded effects above) — independent of, and in
            addition to, YouTube's own native fullscreen button. */}
        <div
          className={isExpanded
            ? 'fixed inset-0 z-[70] bg-black flex items-center justify-center overflow-hidden touch-none'
            : 'video-modal-video-area relative w-full bg-black'}
        >
          {hasVideo ? (
            <iframe
              ref={iframeRef}
              className={isExpanded ? '' : 'absolute inset-0 w-full h-full'}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={topic.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          ) : null}

          {hasVideo && (
            <div
              ref={handleRef}
              className="absolute z-10 cursor-grab touch-none select-none active:cursor-grabbing"
              style={{
                top: isExpanded ? '10px' : '6px',
                left: '50%',
                transform: `translate(-50%, ${dragOffset}px)`,
              }}
              role="button"
              tabIndex={0}
              aria-label={isExpanded ? 'Drag down or tap to exit full screen' : 'Drag up or tap for full screen'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsExpanded((prev) => !prev)
              }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
                <span className="w-8 h-1 rounded-full bg-white/70" />
                <svg
                  className={`w-3.5 h-3.5 text-white/80 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </div>
            </div>
          )}

          {!hasVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${theme.badge}`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">No video linked yet</p>
                <p className="text-gray-400 text-sm mt-1 max-w-sm">
                  Open <code className="text-xs bg-gray-800 px-1.5 py-0.5 rounded">src/data/roadmap.js</code>,
                  find topic <code className={`text-xs px-1.5 py-0.5 rounded ${theme.badge}`}>{topic.id}</code>,
                  and set its <code className="text-xs bg-gray-800 px-1.5 py-0.5 rounded">videoId</code> to a YouTube video ID.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  e.g.&nbsp;
                  <code className="bg-gray-800 px-1.5 py-0.5 rounded">videoId: "dQw4w9WgXcQ"</code>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-gray-900 border-t border-gray-800 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-xs text-gray-500">
            Press <kbd className="bg-gray-800 border border-gray-700 rounded px-1.5 py-0.5 font-mono text-xs">Esc</kbd> or click outside to close
          </span>
          {hasVideo && (
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs flex items-center gap-1.5 ${theme.accent} hover:underline`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.14 8.14 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
              </svg>
              Open on YouTube
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
