import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = ({ 
  employees, 
  onEdit, 
  onDelete, 
  onSort, 
  sortField, 
  sortDirection 
}) => {
  const getSortIcon = (field) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th onClick={() => onSort('firstName')} className="sortable">
              First Name {getSortIcon('firstName')}
            </th>
            <th onClick={() => onSort('lastName')} className="sortable">
              Last Name {getSortIcon('lastName')}
            </th>
            <th onClick={() => onSort('email')} className="sortable">
              Email {getSortIcon('email')}
            </th>
            <th onClick={() => onSort('department')} className="sortable">
              Department {getSortIcon('department')}
            </th>
            <th onClick={() => onSort('position')} className="sortable">
              Position {getSortIcon('position')}
            </th>
            <th onClick={() => onSort('salary')} className="sortable">
              Salary {getSortIcon('salary')}
            </th>
            <th onClick={() => onSort('hireDate')} className="sortable">
              Hire Date {getSortIcon('hireDate')}
            </th>
            <th onClick={() => onSort('status')} className="sortable">
              Status {getSortIcon('status')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;