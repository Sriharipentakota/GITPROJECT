import { useEffect, useState } from 'react'
import { roadmapData, phaseThemes, PLAYWRIGHT_TOPIC_IDS } from './data/roadmap'
import Header from './components/Header'
import PhaseNav from './components/PhaseNav'
import SectionAccordion from './components/SectionAccordion'
import VideoModal from './components/VideoModal'

const STORAGE_KEY = 'roadmap-view-state'
const FILTER_MODE = {
  ALL: 'all',
  PLAYWRIGHT: 'playwright',
}

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
  const filter = params.get('filter') || FILTER_MODE.ALL

  if (topicId) {
    const matched = findTopicById(topicId)
    if (matched) {
      return { selectedPhaseId: matched.phaseId, selectedTopic: matched.topic, selectedFilter: filter }
    }
  }

  const phaseId = Number(phaseParam)
  if (params.has('phase') && Number.isInteger(phaseId) && roadmapData.some(p => p.id === phaseId)) {
    return { selectedPhaseId: phaseId, selectedTopic: null, selectedFilter: filter }
  }

  return { selectedPhaseId: 1, selectedTopic: null, selectedFilter: filter }
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
        return {
          selectedPhaseId: matched.phaseId,
          selectedTopic: matched.topic,
          selectedFilter: parsed.selectedFilter || FILTER_MODE.ALL,
        }
      }
    }

    if (Number.isInteger(parsed.phaseId) && roadmapData.some(p => p.id === parsed.phaseId)) {
      return {
        selectedPhaseId: parsed.phaseId,
        selectedTopic: null,
        selectedFilter: parsed.selectedFilter || FILTER_MODE.ALL,
      }
    }
  } catch {
    // ignore invalid storage data
  }
  return null
}

function buildSearchParams(phaseId, topic, filter) {
  const params = new URLSearchParams()
  params.set('phase', String(phaseId))
  if (topic) params.set('topic', topic.id)
  if (filter && filter !== FILTER_MODE.ALL) params.set('filter', filter)
  return params.toString()
}

function saveAppState(phaseId, topic, filter) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      phaseId,
      topicId: topic?.id ?? null,
      selectedFilter: filter,
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

    return { selectedPhaseId: 1, selectedTopic: null, selectedFilter: FILTER_MODE.ALL }
  })()

  const [selectedPhaseId, setSelectedPhaseId] = useState(initialState.selectedPhaseId)
  const [selectedTopic, setSelectedTopic] = useState(initialState.selectedTopic)
  const [selectedFilter, setSelectedFilter] = useState(initialState.selectedFilter)

  const filteredRoadmap = roadmapData.map(phase => {
    if (selectedFilter !== FILTER_MODE.PLAYWRIGHT) {
      return phase
    }

    const sections = phase.sections
      .map(section => ({
        ...section,
        topics: section.topics.filter(topic => PLAYWRIGHT_TOPIC_IDS.has(topic.id)),
      }))
      .filter(section => section.topics.length > 0)

    return { ...phase, sections }
  }).filter(phase => phase.sections.length > 0)

  const availablePhaseIds = filteredRoadmap.map(p => p.id)
  const currentPhaseId = availablePhaseIds.includes(selectedPhaseId)
    ? selectedPhaseId
    : filteredRoadmap[0]?.id ?? roadmapData[0].id

  useEffect(() => {
    if (!availablePhaseIds.includes(selectedPhaseId)) {
      setSelectedPhaseId(currentPhaseId)
    }
  }, [availablePhaseIds, selectedPhaseId, currentPhaseId])

  useEffect(() => {
    if (selectedTopic && !findTopicById(selectedTopic.id)) {
      setSelectedTopic(null)
      return
    }

    if (selectedFilter === FILTER_MODE.PLAYWRIGHT && selectedTopic && !PLAYWRIGHT_TOPIC_IDS.has(selectedTopic.id)) {
      setSelectedTopic(null)
    }
  }, [selectedFilter, selectedTopic])

  const phase = filteredRoadmap.find(p => p.id === currentPhaseId) || roadmapData[0]
  const theme = phaseThemes[phase.id]

  const totalTopics = phase.sections.reduce((sum, s) => sum + s.topics.length, 0)
  const linkedTopics = phase.sections.reduce(
    (sum, s) => sum + s.topics.filter(t => t.videoId && t.videoId.trim() !== '').length,
    0
  )

  useEffect(() => {
    saveAppState(currentPhaseId, selectedTopic, selectedFilter)
    const query = buildSearchParams(currentPhaseId, selectedTopic, selectedFilter)
    window.history.replaceState(null, '', `${window.location.pathname}?${query}`)
  }, [currentPhaseId, selectedTopic, selectedFilter])

  const handleSelectPhase = (id) => {
    setSelectedPhaseId(id)
    setSelectedTopic(null)
  }

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value)
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
        phases={filteredRoadmap}
        selectedPhase={currentPhaseId}
        onSelect={handleSelectPhase}
      />

      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Filter topics</p>
            <label className="sr-only" htmlFor="roadmap-filter">Roadmap filter</label>
            <select
              id="roadmap-filter"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="mt-2 w-full sm:w-auto bg-gray-950 border border-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value={FILTER_MODE.ALL}>All JavaScript</option>
              <option value={FILTER_MODE.PLAYWRIGHT}>Playwright Essentials</option>
            </select>
          </div>
        </div>
      </div>

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
