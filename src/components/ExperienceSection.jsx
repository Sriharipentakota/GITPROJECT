/**
 * Experience Section Component
 * 
 * Professional timeline showcasing work experience with expandable details,
 * achievements, and technology stacks. Features edit functionality for experience management.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Plus, Trash2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Modal from './Modal';
import RichTextEditor from './RichTextEditor';

const ExperienceSection = ({ data, onUpdate }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(data);
  const [expandedItem, setExpandedItem] = useState(null);

  // Handle adding new experience
  const addNewExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: 'New Company',
      position: 'Position Title',
      startDate: '2024-01',
      endDate: 'Present',
      description: 'Job description...',
      achievements: ['Achievement 1', 'Achievement 2'],
      technologies: ['Technology 1'],
      location: 'Location'
    };
    setEditData([newExperience, ...editData]);
  };

  // Handle removing experience
  const removeExperience = (id) => {
    setEditData(editData.filter(exp => exp.id !== id));
  };

  // Handle updating experience
  const updateExperience = (id, field, value) => {
    setEditData(editData.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  // Handle updating achievements array
  const updateAchievements = (id, achievements) => {
    const achievementArray = achievements.split('\n').filter(a => a.trim());
    updateExperience(id, 'achievements', achievementArray);
  };

  const handleSave = () => {
    onUpdate(editData);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditData(data);
    setIsEditMode(false);
  };

  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Professional Experience"
          subtitle="My professional journey and the impact I've made at each organization."
          onEdit={() => setIsEditMode(true)}
        />

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          {data.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Desktop Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full top-6"></div>
              
              {/* Mobile Timeline Indicator */}
              <div className="lg:hidden flex justify-center mb-4">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              {/* Content Card */}
              <motion.div
                className={`
                  w-full lg:w-5/12 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100
                  ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}
                `}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-3 justify-center lg:justify-start">
                  <Building className="text-blue-600 mr-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                </div>

                <h4 className="text-lg font-semibold text-purple-600 mb-2 text-center lg:text-left">{exp.position}</h4>

                <div className="flex items-center text-gray-600 mb-2 justify-center lg:justify-start">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4 justify-center lg:justify-start">
                  <MapPin size={16} className="mr-2" />
                  <span>{exp.location}</span>
                </div>

                <div className="text-gray-700 mb-4 text-center lg:text-left" dangerouslySetInnerHTML={{ __html: exp.description }} />

                {/* Toggle Button for Achievements */}
                <button
                  onClick={() => setExpandedItem(expandedItem === exp.id ? null : exp.id)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 block w-full text-center lg:text-left"
                >
                  {expandedItem === exp.id ? 'Show Less' : 'Show Achievements'}
                </button>

                {/* Expandable Achievements */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedItem === exp.id ? 'auto' : 0,
                    opacity: expandedItem === exp.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                    // ...existing code...
                      <div dangerouslySetInnerHTML={{ __html: exp.achievementsHtml || '' }} />
                    
                    <div className="mt-3">
                      <h5 className="font-semibold text-gray-800 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditMode}
        onClose={handleCancel}
        title="Edit Experience"
      >
        <div className="space-y-6">
          <button
            onClick={addNewExperience}
            className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Plus size={16} />
            <span>Add New Experience</span>
          </button>

          <div className="space-y-6 max-h-96 overflow-y-auto">
            {editData.map((exp) => (
              <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <RichTextEditor
                    value={exp.description}
                    onChange={(content) => updateExperience(exp.id, 'description', content)}
                    placeholder="Job description..."
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Achievements (one per line)</label>
                  <RichTextEditor
                    value={exp.achievements.join('\n')}
                    onChange={(content) => updateAchievements(exp.id, content)}
                    placeholder="List your key achievements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={exp.technologies.join(', ')}
                      onChange={(e) => updateExperience(exp.id, 'technologies', e.target.value.split(', ').filter(t => t.trim()))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Trash2 size={16} />
                  <span>Remove Experience</span>
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ExperienceSection;