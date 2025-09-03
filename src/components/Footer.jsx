/**
 * Footer Component
 * 
 * Professional footer with copyright information, social links, and branding.
 * Features edit functionality for footer content management.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3 } from 'lucide-react';
import Modal from './Modal';

const Footer = ({ personalName, personalTitle }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [footerData, setFooterData] = useState({
    copyrightText: `© 2025 ${personalName}. All rights reserved.`,
    tagline: personalTitle,
    builtWith: 'Built with React & Framer Motion.'
  });
  const [editData, setEditData] = useState(footerData);

  const handleSave = () => {
    setFooterData(editData);
    setIsEditMode(false);
    // Save to localStorage
    localStorage.setItem('portfolioFooter', JSON.stringify(editData));
  };

  const handleCancel = () => {
    setEditData(footerData);
    setIsEditMode(false);
  };

  // Load footer data from localStorage on component mount
  React.useEffect(() => {
    const savedFooter = localStorage.getItem('portfolioFooter');
    if (savedFooter) {
      try {
        const parsed = JSON.parse(savedFooter);
        setFooterData(parsed);
        setEditData(parsed);
      } catch (error) {
        console.error('Error loading footer data:', error);
      }
    }
  }, []);

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalName}
            </h3>
            <motion.button
              onClick={() => setIsEditMode(true)}
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit3 size={16} />
            </motion.button>
          </div>
          <p className="text-gray-400 mb-6">
            {footerData.tagline}
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500">
              {footerData.copyrightText} {footerData.builtWith}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditMode}
        onClose={handleCancel}
        title="Edit Footer"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
            <textarea
              value={editData.tagline}
              onChange={(e) => setEditData({ ...editData, tagline: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your professional tagline"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Copyright Text</label>
            <input
              type="text"
              value={editData.copyrightText}
              onChange={(e) => setEditData({ ...editData, copyrightText: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="© 2025 Your Name. All rights reserved."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Built With Text</label>
            <input
              type="text"
              value={editData.builtWith}
              onChange={(e) => setEditData({ ...editData, builtWith: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Built with React & Framer Motion."
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
    </motion.footer>
  );
};

export default Footer;