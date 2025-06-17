import React, { useState } from 'react';
import Modal from './Modal';

const AddRowButton = ({ onAddRow ,isOpen,onClose}) => {
//  const [isOpen, setIsOpen] = useState(false);
  const [columnName, setColumnName] = useState('');
  const handleSubmit = () => {
    onAddRow()
      // setIsOpen(true);
  
  };
console.log(isOpen,"onAddRow");
  return (
<>
    <button
      onClick={()=>handleSubmit()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
    >
      Add Row
    </button>
  <Modal isOpen={isOpen} onClose={onClose} title="Add New Row">
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
              onClick={isOpen}
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

export default AddRowButton;