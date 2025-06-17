import React from 'react';

const TableHeaderFilter = ({ column }) => {
  return (
    <input
      type="text"
      onChange={e => column.setFilterValue(e.target.value)}
      className="mt-2 p-1 border rounded w-full"
      placeholder="Filter..."
    />
  );
};

export default TableHeaderFilter;