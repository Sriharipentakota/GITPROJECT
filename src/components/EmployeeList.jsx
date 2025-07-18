import React from 'react';
import EmployeeTable from './EmployeeTable';

const EmployeeList = ({ 
  employees, 
  onEdit, 
  onDelete, 
  onSort, 
  sortField, 
  sortDirection 
}) => {
  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <h3>No employees found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="employee-list">
      <div className="list-header">
        <h2>Employee List ({employees.length})</h2>
      </div>
      <EmployeeTable
        employees={employees}
        onEdit={onEdit}
        onDelete={onDelete}
        onSort={onSort}
        sortField={sortField}
        sortDirection={sortDirection}
      />
    </div>
  );
};

export default EmployeeList;