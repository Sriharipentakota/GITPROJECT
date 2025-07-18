import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  // ============================================================
  // CUSTOMIZE YOUR FRONTEND EXPERIENCE HERE
  // ============================================================
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechFlow Solutions',
      location: 'New York, NY',
      period: 'Jan 2022 - Present',
      description: [
        'Lead frontend development for multiple client projects using React and Vue.js',
        'Implemented responsive designs and improved website performance by 40%',
        'Mentored junior developers and established frontend coding standards',
        'Collaborated with UX/UI designers to create pixel-perfect implementations'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Creative Agency',
      location: 'San Francisco, CA',
      period: 'Mar 2020 - Dec 2021',
      description: [
        'Developed interactive web applications using modern JavaScript frameworks',
        'Created reusable component libraries and maintained design systems',
        'Optimized websites for SEO and accessibility compliance',
        'Worked closely with designers to implement creative and engaging user interfaces'
      ]
    },
    {
      title: 'Junior Frontend Developer',
      company: 'WebCraft Studio',
      location: 'Los Angeles, CA',
      period: 'Jun 2019 - Feb 2020',
      description: [
        'Built responsive websites using HTML5, CSS3, and JavaScript',
        'Implemented CSS animations and interactive elements',
        'Collaborated with backend developers for API integration',
        'Participated in code reviews and agile development processes'
      ]
    },
    {
      title: 'Frontend Intern',
      company: 'StartupHub',
      location: 'Austin, TX',
      period: 'Jan 2019 - May 2019',
      description: [
        'Assisted in developing user interfaces for web applications',
        'Learned modern frontend frameworks and development tools',
        'Fixed bugs and implemented minor features under supervision',
        'Gained experience with version control and team collaboration'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      period: '2015 - 2019',
      description: 'Focused on web development, user interface design, and software engineering principles'
    },
    {
      degree: 'Frontend Development Bootcamp',
      school: 'Code Academy Pro',
      period: '2018',
      description: 'Intensive 6-month program covering React, JavaScript, and modern frontend development'
    }
  ];
  // ============================================================

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Experience & Education</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            My journey as a frontend developer and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
              Frontend Experience
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right flex-shrink-0">
                      <div className="flex items-center sm:justify-end mb-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center sm:justify-end">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 sm:space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">{edu.school}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0 flex-shrink-0">
                      <div className="flex items-center sm:justify-end">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Frontend Certifications */}
            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Frontend Certifications</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                  <h5 className="font-semibold text-gray-900 text-sm sm:text-base">React Developer Certification</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Meta (Facebook) • 2023</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                  <h5 className="font-semibold text-gray-900 text-sm sm:text-base">JavaScript Algorithms and Data Structures</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">freeCodeCamp • 2022</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                  <h5 className="font-semibold text-gray-900 text-sm sm:text-base">Responsive Web Design Certification</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">freeCodeCamp • 2021</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                  <h5 className="font-semibold text-gray-900 text-sm sm:text-base">CSS Grid and Flexbox Mastery</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">CSS-Tricks • 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;