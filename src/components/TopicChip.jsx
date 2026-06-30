import { phaseThemes } from '../data/roadmap'

export default function TopicChip({ topic, phaseId, onClick }) {
  const theme = phaseThemes[phaseId]
  const hasVideo = topic.videoId && topic.videoId.trim() !== ''

  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-start gap-2 w-full text-left px-3 py-2.5
        rounded-lg text-sm transition-all duration-150 cursor-pointer
        ${theme.chip}
      `}
    >
      {/* Play icon — filled when video exists */}
      <span className={`shrink-0 mt-0.5 transition-transform duration-150 group-hover:scale-110 ${theme.icon}`}>
        {hasVideo ? (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10"/>
            <path d="M10 8l6 4-6 4V8z"/>
          </svg>
        )}
      </span>

      <span className="leading-snug font-medium">{topic.name}</span>

      {/* No-video badge */}
      {!hasVideo && (
        <span className="absolute top-1.5 right-1.5 text-[10px] text-gray-600 font-mono hidden group-hover:block">
          add URL
        </span>
      )}
    </button>
  )
}
