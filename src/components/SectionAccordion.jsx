import { useState } from 'react'
import { phaseThemes } from '../data/roadmap'
import TopicChip from './TopicChip'

export default function SectionAccordion({ section, phaseId, onTopicSelect }) {
  const [open, setOpen] = useState(true)
  const theme = phaseThemes[phaseId]

  return (
    <div className={`rounded-xl border border-gray-800 overflow-hidden ${theme.sectionBg}`}>
      {/* Section header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={`text-xs font-mono font-bold ${theme.accent} shrink-0`}>
            {section.id}
          </span>
          <span className="font-semibold text-white text-sm sm:text-base truncate">
            {section.title}
          </span>
          <span className={`hidden sm:inline-flex text-xs px-2 py-0.5 rounded-full shrink-0 ${theme.badge}`}>
            {section.topics.length} topics
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Section description */}
      {open && section.description && (
        <p className="px-4 pb-2 text-xs text-gray-400 italic border-b border-gray-800/60">
          {section.description}
        </p>
      )}

      {/* Topics grid */}
      {open && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {section.topics.map(topic => (
            <TopicChip
              key={topic.id}
              topic={topic}
              phaseId={phaseId}
              onClick={() => onTopicSelect(topic)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
