import { useEffect, useState } from 'react'
import { roadmapData, phaseThemes } from './data/roadmap'
import Header from './components/Header'
import PhaseNav from './components/PhaseNav'
import SectionAccordion from './components/SectionAccordion'
import VideoModal from './components/VideoModal'

const STORAGE_KEY = 'roadmap-view-state'

function findTopicById(topicId) {
  for (const phase of roadmapData) {
    for (const section of phase.sections) {
      for (const topic of section.topics) {
        if (topic.id === topicId) {
          return { topic, phaseId: phase.id }
        }
      }
    }
  }
  return null
}

function getStateFromSearchParams() {
  const params = new URLSearchParams(window.location.search)
  const topicId = params.get('topic')
  const phaseParam = params.get('phase')

  if (topicId) {
    const matched = findTopicById(topicId)
    if (matched) {
      return { selectedPhaseId: matched.phaseId, selectedTopic: matched.topic }
    }
  }

  const phaseId = Number(phaseParam)
  if (params.has('phase') && Number.isInteger(phaseId) && roadmapData.some(p => p.id === phaseId)) {
    return { selectedPhaseId: phaseId, selectedTopic: null }
  }

  return null
}

function getStateFromStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null

    if (parsed.topicId) {
      const matched = findTopicById(parsed.topicId)
      if (matched) {
        return { selectedPhaseId: matched.phaseId, selectedTopic: matched.topic }
      }
    }

    if (Number.isInteger(parsed.phaseId) && roadmapData.some(p => p.id === parsed.phaseId)) {
      return { selectedPhaseId: parsed.phaseId, selectedTopic: null }
    }
  } catch {
    // ignore invalid storage data
  }
  return null
}

function buildSearchParams(phaseId, topic) {
  const params = new URLSearchParams()
  params.set('phase', String(phaseId))
  if (topic) params.set('topic', topic.id)
  return params.toString()
}

function saveAppState(phaseId, topic) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      phaseId,
      topicId: topic?.id ?? null,
    }))
  } catch {
    // localStorage may be unavailable in stricter browser modes
  }
}

export default function App() {
  const initialState = (() => {
    const fromParams = getStateFromSearchParams()
    if (fromParams) return fromParams

    const fromStorage = getStateFromStorage()
    if (fromStorage) return fromStorage

    return { selectedPhaseId: 1, selectedTopic: null }
  })()

  const [selectedPhaseId, setSelectedPhaseId] = useState(initialState.selectedPhaseId)
  const [selectedTopic, setSelectedTopic] = useState(initialState.selectedTopic)

  const phase = roadmapData.find(p => p.id === selectedPhaseId) || roadmapData[0]
  const theme = phaseThemes[phase.id]

  const totalTopics = phase.sections.reduce((sum, s) => sum + s.topics.length, 0)
  const linkedTopics = phase.sections.reduce(
    (sum, s) => sum + s.topics.filter(t => t.videoId && t.videoId.trim() !== '').length,
    0
  )

  useEffect(() => {
    saveAppState(selectedPhaseId, selectedTopic)
    const query = buildSearchParams(selectedPhaseId, selectedTopic)
    window.history.replaceState(null, '', `${window.location.pathname}?${query}`)
  }, [selectedPhaseId, selectedTopic])

  const handleSelectPhase = (id) => {
    setSelectedPhaseId(id)
    setSelectedTopic(null)
  }

  const handleTopicSelect = (topic) => {
    const matched = findTopicById(topic.id)
    if (matched) {
      setSelectedPhaseId(matched.phaseId)
      setSelectedTopic(matched.topic)
    } else {
      setSelectedTopic(topic)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PhaseNav
        phases={roadmapData}
        selectedPhase={selectedPhaseId}
        onSelect={handleSelectPhase}
      />

      {/* Phase hero */}
      <div className={`border-b border-gray-800 ${theme.sectionBg}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-semibold uppercase tracking-widest ${theme.accent}`}>
                  Phase {phase.id}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${theme.badge}`}>
                  {phase.level}
                </span>
                <span className="text-xs text-gray-500">{phase.weeks}</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
                {phase.title}
              </h2>
              <p className="mt-0.5 text-sm text-gray-400">{phase.outcome}</p>
            </div>

            {/* Progress indicator */}
            <div className="shrink-0 text-right">
              <p className="text-xs text-gray-500 mb-1">
                {linkedTopics}/{totalTopics} videos linked
              </p>
              <div className="w-40 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${theme.progress}`}
                  style={{ width: totalTopics > 0 ? `${(linkedTopics / totalTopics) * 100}%` : '0%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <main className="flex-1 max-w-screen-2xl mx-auto w-full px-4 sm:px-6 py-6">
        <div className="flex flex-col gap-4">
          {phase.sections.map(section => (
            <SectionAccordion
              key={section.id}
              section={section}
              phaseId={selectedPhaseId}
              onTopicSelect={handleTopicSelect}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-gray-600">
          Click any topic to watch its video · Add YouTube IDs in{' '}
          <code className="bg-gray-800 px-1.5 py-0.5 rounded">src/data/roadmap.js</code>
        </p>
      </main>

      {selectedTopic && (
        <VideoModal
          topic={selectedTopic}
          phaseId={selectedPhaseId}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  )
}
