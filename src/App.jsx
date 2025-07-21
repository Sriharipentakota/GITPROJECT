import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import ConfirmationModal from './components/ConfirmationModal';
import ExportButton from './components/ExportButton';
import { validateEmployee } from './utils/dataHelpers';
import './styles/App.css';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
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

  // Fetch employees from API
  const fetchEmployees = () => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Axios error:', error);
        showNotification('Failed to fetch employees', 'error');
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Get unique departments for filter dropdown
  const departments = ["IT", "HR", "Finance", "Marketing", "Sales"];

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

  // Create employee via API
  const handleCreateEmployee = (employeeData) => {
console.log(employeeData," handleCreateEmployee called");
    const validation = validateEmployee(employeeData);
    if (!validation.isValid) {
      showNotification(validation.errors.join(', '), 'error');
      return;
    }
    axios.post('http://localhost:5000/api/employees', employeeData)
      .then(() => {
        fetchEmployees();
        setShowForm(false);
        showNotification('Employee created successfully!', 'success');
      })
      .catch(error => {
        showNotification('Error creating employee', 'error');
        console.error(error);
      });
  };

  // Update employee via API
  const handleUpdateEmployee = (employeeData) => {
    const validation = validateEmployee(employeeData);
    if (!validation.isValid) {
      showNotification(validation.errors.join(', '), 'error');
      return;
    }
    const id = employeeData._id || employeeData.id;
    axios.put(`http://localhost:5000/api/employees/${id}`, employeeData)
      .then(() => {
        fetchEmployees();
        setEditingEmployee(null);
        setShowForm(false);
        showNotification('Employee updated successfully!', 'success');
      })
      .catch(error => {
        showNotification('Error updating employee', 'error');
        console.error(error);
      });
  };

  // Delete employee via API
  const handleDeleteEmployee = (employeeId) => {
console.log(employeeId, " handleDeleteEmployee called");
    const employee = employees.find(emp => (emp._id || emp.id) === employeeId);
    setConfirmModal({
      isOpen: true,
      title: 'Delete Employee',
      message: `Are you sure you want to delete ${employee?.firstName} ${employee?.lastName}? This action cannot be undone.`,
      onConfirm: () => {
        axios.delete(`http://localhost:5000/api/employees/${employeeId}`)
          .then(() => {
            fetchEmployees();
            showNotification('Employee deleted successfully!', 'success');
            setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null });
          })
          .catch(error => {
            showNotification('Error deleting employee', 'error');
            console.error(error);
          });
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