import React from 'react';
import { flexRender } from '@tanstack/react-table';
import TableHeaderActions from './TableHeaderActions';
import TableHeaderFilter from './TableHeaderFilter';

const TableHeaderCell = ({ header, onEditColumn, onDeleteColumn }) => {
  return (
    <th className="px-6 py-3 border-b border-gray-300 bg-gray-50">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div
            className="cursor-pointer"
            onClick={header.column.getToggleSortingHandler()}
          >
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
            {header.column.getIsSorted() && (
              <span>
                {header.column.getIsSorted() === 'asc' ? ' ↑' : ' ↓'}
              </span>
            )}
          </div>
          {header.column.columnDef.accessorKey && (
            <TableHeaderActions
              column={header.column.columnDef}
              onEdit={onEditColumn}
              onDelete={onDeleteColumn}
            />
          )}
        </div>
        {header.column.getCanFilter() && (
          <TableHeaderFilter column={header.column} />
        )}
      </div>
    </th>
  );
};

export default TableHeaderCell;