import { useEffect, useRef } from 'react'
import { phaseThemes } from '../data/roadmap'

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
  const videoId = extractVideoId(topic.videoId)
  const hasVideo = videoId !== ''
  const theme = phaseThemes[phaseId]

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

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

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
            desktop card look. */}
        <div className="video-modal-video-area relative w-full bg-black">
          {hasVideo ? (
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={topic.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          ) : (
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
