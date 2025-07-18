import React from 'react';

const EmployeeRow = ({ employee, onEdit, onDelete }) => {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(salary);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <tr className="employee-row">
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.department}</td>
      <td>{employee.position}</td>
      <td>{formatSalary(employee.salary)}</td>
      <td>{formatDate(employee.hireDate)}</td>
      <td>
        <span className={`status-badge ${employee.status.toLowerCase()}`}>
          {employee.status}
        </span>
      </td>
      <td>
        <div className="action-buttons">
          <button 
            className="btn btn-small btn-secondary"
            onClick={() => onEdit(employee)}
          >
            Edit
          </button>
          <button 
            className="btn btn-small btn-danger"
            onClick={() => onDelete(employee.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;