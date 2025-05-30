import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sideNavbar/sideNavbar';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Experience from './components/experience';
import SystemExperience from './components/systemExperience';
import LanguageSkills from './components/languageSkill';
import ResumeUpload from './components/resumeUpload';
import ResumePreview from './components/resumePreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <PersonalInfo />
                    <Education />
                    <Experience />
                    <SystemExperience />
                    <LanguageSkills />
                    <ResumeUpload />
                  </>
                }
              />
              <Route path="/resume-preview" element={<ResumePreview />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;