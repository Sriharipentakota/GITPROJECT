import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import ConfirmationModal from './components/ConfirmationModal';
import ExportButton from './components/ExportButton';
import { validateEmployee, generateId } from './utils/dataHelpers';
import './styles/App.css';

// Initial sample data
const initialEmployees = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    salary: 75000,
    hireDate: '2022-01-15',
    status: 'Active'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: 68000,
    hireDate: '2021-11-08',
    status: 'Active'
  },
  {
    id: 3,
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@company.com',
    department: 'HR',
    position: 'HR Specialist',
    salary: 55000,
    hireDate: '2023-03-22',
    status: 'Active'
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@company.com',
    department: 'Finance',
    position: 'Financial Analyst',
    salary: 62000,
    hireDate: '2022-07-12',
    status: 'Inactive'
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@company.com',
    department: 'Engineering',
    position: 'Junior Developer',
    salary: 52000,
    hireDate: '2023-09-05',
    status: 'Active'
  }
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortField, setSortField] = useState('lastName');
  const [sortDirection, setSortDirection] = useState('asc');
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null
  });

  // Get unique departments for filter dropdown
  const departments = [...new Set(employees.map(emp => emp.department))];

  // Filter and sort employees
  useEffect(() => {
    let filtered = employees.filter(employee => {
      const matchesSearch = searchTerm === '' || 
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment = filterDepartment === '' || employee.department === filterDepartment;
      const matchesStatus = filterStatus === '' || employee.status === filterStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === 'salary') {
        aValue = parseFloat(aValue);
        bValue = parseFloat(bValue);
      } else if (sortField === 'hireDate') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      } else {
        aValue = aValue.toString().toLowerCase();
        bValue = bValue.toString().toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    setFilteredEmployees(filtered);
  }, [employees, searchTerm, filterDepartment, filterStatus, sortField, sortDirection]);

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  // Handle employee creation
  const handleCreateEmployee = (employeeData) => {
    const validation = validateEmployee(employeeData);
    if (!validation.isValid) {
      showNotification(validation.errors.join(', '), 'error');
      return;
    }

    const newEmployee = {
      ...employeeData,
      id: generateId(employees),
      salary: parseFloat(employeeData.salary)
    };

    setEmployees(prev => [...prev, newEmployee]);
    setShowForm(false);
    showNotification('Employee created successfully!', 'success');
  };

  // Handle employee update
  const handleUpdateEmployee = (employeeData) => {
    const validation = validateEmployee(employeeData);
    if (!validation.isValid) {
      showNotification(validation.errors.join(', '), 'error');
      return;
    }

    const updatedEmployee = {
      ...employeeData,
      salary: parseFloat(employeeData.salary)
    };

    setEmployees(prev => prev.map(emp => 
      emp.id === editingEmployee.id ? updatedEmployee : emp
    ));
    setEditingEmployee(null);
    setShowForm(false);
    showNotification('Employee updated successfully!', 'success');
  };

  // Handle employee deletion
  const handleDeleteEmployee = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    setConfirmModal({
      isOpen: true,
      title: 'Delete Employee',
      message: `Are you sure you want to delete ${employee.firstName} ${employee.lastName}? This action cannot be undone.`,
      onConfirm: () => {
        setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
        showNotification('Employee deleted successfully!', 'success');
        setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null });
      }
    });
  };

  // Close confirmation modal
  const closeConfirmModal = () => {
    setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null });
  };

  // Handle edit employee
  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Handle search and filters
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterDepartment = (department) => {
    setFilterDepartment(department);
  };

  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterDepartment('');
    setFilterStatus('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Management System</h1>
        <div className="header-actions">
          <ExportButton 
            employees={employees}
            filteredEmployees={filteredEmployees}
            searchTerm={searchTerm}
            filterDepartment={filterDepartment}
            filterStatus={filterStatus}
          />
          <button 
            className="btn btn-primary"
            onClick={() => {
              setEditingEmployee(null);
              setShowForm(true);
            }}
          >
            Add New Employee
          </button>
        </div>
      </header>

      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <main className="app-main">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
          departments={departments}
          selectedDepartment={filterDepartment}
          onFilterDepartment={handleFilterDepartment}
          selectedStatus={filterStatus}
          onFilterStatus={handleFilterStatus}
          onClearFilters={handleClearFilters}
        />

        <div className="app-stats">
          <div className="stat-card">
            <h3>Total Employees</h3>
            <p>{employees.length}</p>
          </div>
          <div className="stat-card">
            <h3>Active Employees</h3>
            <p>{employees.filter(emp => emp.status === 'Active').length}</p>
          </div>
          <div className="stat-card">
            <h3>Departments</h3>
            <p>{departments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Filtered Results</h3>
            <p>{filteredEmployees.length}</p>
          </div>
        </div>

        {showForm && (
          <EmployeeForm
            employee={editingEmployee}
            onSave={editingEmployee ? handleUpdateEmployee : handleCreateEmployee}
            onCancel={() => {
              setShowForm(false);
              setEditingEmployee(null);
            }}
            departments={departments}
          />
        )}

        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
          onSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
      </main>

      <ConfirmationModal
        isOpen={confirmModal.isOpen}
        onClose={closeConfirmModal}
        onConfirm={confirmModal.onConfirm}
        title={confirmModal.title}
        message={confirmModal.message}
      />
    </div>
  );
}

export default App;