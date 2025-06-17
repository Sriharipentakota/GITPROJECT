import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const ViewEditRowDialog = ({ isOpen, onClose, rowData, columns, onSave }) => {
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    // Only update editedData if we have valid rowData
    if (isOpen && rowData) {
      setEditedData(rowData);
    }
  }, [isOpen, rowData]);

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  // Early return if modal shouldn't be shown
  if (!isOpen) return null;

  // Return loading state if we don't have columns or rowData
  if (!columns?.length || !rowData) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="View/Edit Row">
        <div className="p-4">
          <p>Loading...</p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="View/Edit Row">
      <div className="p-4">
        <div className="space-y-4 mb-4">
          {columns.map(column => {
            const key = column.accessorKey;
            return (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {column.header}
                </label>
                <input
                  type="text"
                  value={editedData[key] || ''}
                  onChange={(e) => setEditedData(prev => ({
                    ...prev,
                    [key]: e.target.value
                  }))}
                  className="w-full p-2 border rounded"
                />
              </div>
            );
          })}
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

export default ViewEditRowDialog;