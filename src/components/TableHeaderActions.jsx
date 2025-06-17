import React from 'react';

const TableHeaderActions = ({ column, onEdit, onDelete }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onEdit(column)}
        className="text-blue-600 hover:text-blue-800"
        title="Edit column"
      >
        ✎
      </button>
      <button
        onClick={() => onDelete(column.accessorKey)}
        className="text-red-600 hover:text-red-800"
        title="Delete column"
      >
        ✕
      </button>
    </div>
  );
};

export default TableHeaderActions;