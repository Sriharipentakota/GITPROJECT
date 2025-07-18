import React from 'react';
import * as XLSX from 'xlsx';

const ExportButton = ({ employees, filteredEmployees, searchTerm, filterDepartment, filterStatus }) => {
  const exportToExcel = () => {
    // Use filtered employees if any filters are applied, otherwise use all employees
    const dataToExport = (searchTerm || filterDepartment || filterStatus) 
      ? filteredEmployees 
      : employees;

    if (dataToExport.length === 0) {
      alert('No data to export');
      return;
    }

    // Prepare data for export
    const exportData = dataToExport.map(employee => ({
      'Employee ID': employee.id,
      'First Name': employee.firstName,
      'Last Name': employee.lastName,
      'Email': employee.email,
      'Department': employee.department,
      'Position': employee.position,
      'Salary': employee.salary,
      'Hire Date': employee.hireDate,
      'Status': employee.status
    }));

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    const columnWidths = [
      { wch: 12 }, // Employee ID
      { wch: 15 }, // First Name
      { wch: 15 }, // Last Name
      { wch: 25 }, // Email
      { wch: 15 }, // Department
      { wch: 20 }, // Position
      { wch: 12 }, // Salary
      { wch: 12 }, // Hire Date
      { wch: 10 }  // Status
    ];
    worksheet['!cols'] = columnWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');

    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `employees_${currentDate}.xlsx`;

    // Save file
    XLSX.writeFile(workbook, filename);
  };

  return (
    <button 
      className="btn btn-success export-btn"
      onClick={exportToExcel}
      title="Export employee data to Excel"
    >
      📊 Export to Excel
    </button>
  );
};

export default ExportButton;