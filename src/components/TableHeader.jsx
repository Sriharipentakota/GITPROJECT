import React from 'react';
import { flexRender } from '@tanstack/react-table';
import TableHeaderCell from './TableHeaderCell';

const TableHeader = ({ headerGroup, onEditColumn, onDeleteColumn }) => {
  return (
    <tr>
      {headerGroup.headers.map(header => (
        <TableHeaderCell
          key={header.id}
          header={header}
          onEditColumn={onEditColumn}
          onDeleteColumn={onDeleteColumn}
        />
      ))}
      <th className="px-6 py-3 border-b border-gray-300 bg-gray-50">
        Actions
      </th>
    </tr>
  );
};

export default TableHeader;