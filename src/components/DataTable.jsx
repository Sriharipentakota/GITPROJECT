import React, { useCallback, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import TableHeader from './TableHeader';
import TableActions from './TableActions';
import Pagination from './Pagination';
import ViewEditColumnDialog from './ViewEditColumnDialog';
import ViewEditRowDialog from './ViewEditRowDialog';
import { exportToExcel } from '../utils/excelExporter';

const DataTable = ({ data, columns: initialColumns, setData }) => {
  const [columns, setColumns] = useState(initialColumns);
  const [editingColumn, setEditingColumn] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  console.log(columns, "columns");

  const deleteRow = useCallback((index) => {
    setData(prev => prev.filter((_, i) => i !== index));
  }, [setData]);

  const deleteColumn = useCallback((columnId) => {
    setColumns(prev => prev.filter(col => col.accessorKey !== columnId));
    setData(prev => prev.map(row => {
      const newRow = { ...row };
      delete newRow[columnId];
      return newRow;
    }));
  }, [setData]);

  const addRow = useCallback(() => {
    const emptyRow = columns.reduce((acc, column) => {
      acc[column.accessorKey] = '';
      return acc;
    }, {});
    console.log(emptyRow, "emptyRow");
    setData(prev => [...prev, emptyRow]);
  }, [columns, setData]);
  const addColumn = useCallback(() => {
    const emptyRow = columns.reduce((acc, column) => {
      acc[column.accessorKey] = '';
      return acc;
    }, {});
    setData(prev => [...prev, emptyRow]);
  }, [columns, setData]);

  const handleColumnSave = useCallback((editedColumn) => {
    setColumns(prev => prev.map(col =>
      col.accessorKey === editedColumn.accessorKey
        ? { ...col, header: editedColumn.header }
        : col
    ));
  }, []);

  const handleRowSave = useCallback((editedRow) => {
    setData(prev => prev.map((row, index) =>
      index === editingRow.index ? editedRow : row
    ));
  }, [editingRow, setData]);

  const handleViewRow = useCallback((rowIndex) => {
    const rowData = data[rowIndex];
    setEditingRow({ index: rowIndex, data: rowData });
  }, [data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const handleExport = () => {
    exportToExcel(data);
  };

  return (
    <div>
      <TableActions
        onExport={handleExport}
        onAddRow={addRow}
        onAddColumn={addColumn}
        isOpen={editingRow !== null}
        onClose={() => setEditingRow(null)}
        rowData={editingRow?.data}
        columns={columns}
        onSave={handleRowSave}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableHeader
                key={headerGroup.id}
                headerGroup={headerGroup}
                onEditColumn={setEditingColumn}
                onDeleteColumn={deleteColumn}
              />
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="px-6 py-4 border-b">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewRow(row.index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View/Edit
                    </button>
                    <button
                      onClick={() => deleteRow(row.index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={table.getState().pagination.pageIndex}
        totalPages={table.getPageCount()}
        onPageChange={table.setPageIndex}
      />

      <ViewEditColumnDialog
        isOpen={editingColumn !== null}
        onClose={() => setEditingColumn(null)}
        columnData={editingColumn}
        onSave={handleColumnSave}
      />

      <ViewEditRowDialog
        isOpen={editingRow !== null}
        onClose={() => setEditingRow(null)}
        rowData={editingRow?.data}
        columns={columns}
        onSave={handleRowSave}
      />
    </div>
  );
};

export default DataTable;