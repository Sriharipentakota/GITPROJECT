import React, { useState } from 'react';
import Modal from './Modal';

const AddColumnButton = ({ onAddColumn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [columnName, setColumnName] = useState('');
console.log(columnName,"columnname");

  const handleSubmit = () => {
    if (columnName.trim()) {
      onAddColumn(columnName.trim());
      setColumnName('');
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Add Column
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add New Column">
        <div className="p-4">
          <input
            type="text"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            placeholder="Enter column name"
            className="w-full p-2 border rounded mb-4"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddColumnButton;