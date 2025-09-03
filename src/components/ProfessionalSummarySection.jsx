/**
 * Professional Summary Section Component
 * 
 * Displays a comprehensive professional summary with edit functionality.
 * Features elegant typography and smooth animations.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import Modal from './Modal';
import RichTextEditor from './RichTextEditor';

const ProfessionalSummarySection = ({ data, onUpdate }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(data);

  const handleSave = () => {
    onUpdate(editData);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditData(data);
    setIsEditMode(false);
  };

  return (
    <section id="summary" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={data.title}
          subtitle="A comprehensive overview of my professional background and expertise"
          onEdit={() => setIsEditMode(true)}
        />

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}

        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <motion.p
              className="list-disc pl-6 text-lg leading-relaxed text-gray-700 text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </motion.div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditMode}
        onClose={handleCancel}
        title="Edit Professional Summary"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
            <input
              type="text"
              value={editData.title}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
            <RichTextEditor
              value={editData.content}
              onChange={(content) => setEditData({ ...editData, content })}
              placeholder="Write a comprehensive summary of your professional background, expertise, and career highlights..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default ProfessionalSummarySection;