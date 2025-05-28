import React from 'react';
import './userProfile.css';

function UserProfile() {
  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
  ];

  return (
    <div className="user-profile">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;