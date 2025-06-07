import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ConceptExample from "./ConceptExample";
import { allConceptGroups } from "./allConceptGroups";

const TOPICS = ["React", "HTML", "CSS", "JavaScript"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState("React");
  const groups = allConceptGroups[selectedTopic];
  const firstGroup = groups[0];
  const firstConcept = firstGroup?.concepts[0];

  const [selectedConcept, setSelectedConcept] = useState({
    group: firstGroup.title,
    concept: firstConcept,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Reset concept selection when topic changes
  const handleTopicChange = (e) => {
    const newTopic = e.target.value;
    setSelectedTopic(newTopic);
    const newGroups = allConceptGroups[newTopic];
    setSelectedConcept({
      group: newGroups[0].title,
      concept: newGroups[0].concepts[0]
    });
  };

  const handleSelect = (group, concept) => {
    setSelectedConcept({ group, concept });
    setSidebarOpen(false);
  };

  return (
    <div className="app-root">
      {/* Top-level dropdown for topics */}
      <div style={{ position: 'fixed', top: 12, left: 320, zIndex: 2000 }}>
        <select value={selectedTopic} onChange={handleTopicChange} style={{ fontSize: 18, padding: 8 }}>
          {TOPICS?.map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(open => !open)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>
      <Sidebar
        title={`${selectedTopic} Concepts`}
        groups={groups}
        selected={selectedConcept}
        onSelect={handleSelect}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <main className="main-content">
        <h2>
          {selectedConcept.concept.title}{" "}
          <span style={{ fontSize: "1rem", color: "#888" }}>
            ({selectedConcept.group})
          </span>
        </h2>
        <p style={{ color: "#444", marginTop: 0 }}>
          {selectedConcept.concept.description}
        </p>
        <div className="concept-example-container">
          <ConceptExample example={selectedConcept.concept.example} />
        </div>
      </main>
      {/* styles as before... */}
      <style>{`
        .app-root {
          font-family: sans-serif;
        }
        .main-content {
          padding: 2rem;
          background: #f8f8f8;
          min-width: 0;
          overflow-y: auto;
          transition: margin-left 0.25s;
        }
        .concept-example-container {
          margin-top: 2rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px #0001;
          padding: 2rem;
          min-height: 240px;
        }
        .sidebar-toggle {
          display: none;
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1002;
          background: #0af;
          color: #fff;
          border: none;
          border-radius: 4px;
          width: 44px;
          height: 44px;
          font-size: 1.5rem;
        }
        @media (min-width: 701px) {
          .main-content {
            margin-left: 300px;
          }
        }
        @media (max-width: 900px) {
          .main-content {
            padding: 1rem;
          }
          .concept-example-container {
            padding: 1rem;
          }
        }
        @media (max-width: 700px) {
          .main-content {
            margin-left: 0;
          }
          .sidebar-toggle {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

export default App;