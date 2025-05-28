import React from 'react';
import './sideNavbar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#personal-info">Personal Info</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#system-experience">System Experience</a></li>
          <li><a href="#language-skills">Language Skills</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;