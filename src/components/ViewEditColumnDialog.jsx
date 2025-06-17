import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const ViewEditColumnDialog = ({ isOpen, onClose, columnData, onSave }) => {
  const [editedColumn, setEditedColumn] = useState(columnData);

  useEffect(() => {
    if (isOpen && columnData) {
      setEditedColumn(columnData);
    }
  }, [isOpen, columnData]);

  const handleSave = () => {
    onSave(editedColumn);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Column">
      <div className="p-4">
        <div className="space-y-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Column Name
            </label>
            <input
              type="text"
              value={editedColumn?.header || ''}
              onChange={(e) => setEditedColumn(prev => ({
                ...prev,
                header: e.target.value
              }))}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewEditColumnDialog;