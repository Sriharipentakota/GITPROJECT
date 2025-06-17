import React from 'react';
import AddRowButton from './AddRowButton';
import AddColumnButton from './AddColumnButton';

const TableActions = ({ onExport, onAddRow, onAddColumn, isOpen, onClose, rowData, columns, onSave }) => {
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex gap-2">
        <AddRowButton onAddRow={onAddRow} isOpen={isOpen} onClose={onClose} rowData={rowData} columns={columns} onSave={onSave} />
        <AddColumnButton onAddColumn={onAddColumn} />
      </div>
      <button
        onClick={onExport}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default TableActions;