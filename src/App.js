import React from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sideNavbar/sideNavbar';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Experience from './components/experience';
import SystemExperience from './components/systemExperience';
import LanguageSkills from './components/languageSkill';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
          <PersonalInfo />
          <Education />
          <Experience />
          <SystemExperience />
          <LanguageSkills />
        </div>
      </div>
    </div>
  );
}

export default App;