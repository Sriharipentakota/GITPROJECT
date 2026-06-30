import { phaseThemes } from '../data/roadmap'

const phaseIcons = ['🌱', '📦', '⚙️', '🖥️', '⏳', '🏛️', '🔬', '🛠️']

export default function PhaseNav({ phases, selectedPhase, onSelect }) {
  return (
    <nav className="border-b border-gray-800 bg-gray-900/50">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-6">
        <div className="flex overflow-x-auto scrollbar-thin gap-1 py-2">
          {phases.map((phase, i) => {
            const theme = phaseThemes[phase.id]
            const isActive = selectedPhase === phase.id
            return (
              <button
                key={phase.id}
                onClick={() => onSelect(phase.id)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                  transition-all duration-150 shrink-0
                  ${isActive
                    ? theme.tabActive + ' font-semibold shadow-md'
                    : 'text-gray-400 ' + theme.tabInactive}
                `}
              >
                <span className="text-base leading-none">{phaseIcons[i]}</span>
                <span className="hidden sm:inline">Phase {phase.id}:</span>
                <span>{phase.title}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
