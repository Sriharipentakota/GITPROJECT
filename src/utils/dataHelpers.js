// Validation helper for employee data
export const validateEmployee = (employee) => {
  const errors = [];

  if (!employee.firstName || employee.firstName.trim() === '') {
    errors.push('First name is required');
  }

  if (!employee.lastName || employee.lastName.trim() === '') {
    errors.push('Last name is required');
  }

  if (!employee.email || employee.email.trim() === '') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
    errors.push('Invalid email format');
  }

  if (!employee.department || employee.department.trim() === '') {
    errors.push('Department is required');
  }

  if (!employee.position || employee.position.trim() === '') {
    errors.push('Position is required');
  }

  if (!employee.salary || isNaN(employee.salary) || parseFloat(employee.salary) <= 0) {
    errors.push('Valid salary is required');
  }

  if (!employee.hireDate) {
    errors.push('Hire date is required');
  } else if (new Date(employee.hireDate) > new Date()) {
    errors.push('Hire date cannot be in the future');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Generate unique ID for new employees
export const generateId = (employees) => {
  const maxId = employees.reduce((max, emp) => Math.max(max, emp.id), 0);
  return maxId + 1;
};

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Format date
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Filter employees by search term
export const filterEmployees = (employees, searchTerm) => {
  if (!searchTerm) return employees;
  
  const term = searchTerm.toLowerCase();
  return employees.filter(employee => 
    employee.firstName.toLowerCase().includes(term) ||
    employee.lastName.toLowerCase().includes(term) ||
    employee.email.toLowerCase().includes(term) ||
    employee.department.toLowerCase().includes(term) ||
    employee.position.toLowerCase().includes(term)
  );
};

// Sort employees by field
export const sortEmployees = (employees, field, direction) => {
  return [...employees].sort((a, b) => {
    let aValue = a[field];
    let bValue = b[field];

    if (field === 'salary') {
      aValue = parseFloat(aValue);
      bValue = parseFloat(bValue);
    } else if (field === 'hireDate') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    } else {
      aValue = aValue.toString().toLowerCase();
      bValue = bValue.toString().toLowerCase();
    }

    if (direction === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
};

// Get employee statistics
export const getEmployeeStats = (employees) => {
  return {
    total: employees.length,
    active: employees.filter(emp => emp.status === 'Active').length,
    inactive: employees.filter(emp => emp.status === 'Inactive').length,
    departments: [...new Set(employees.map(emp => emp.department))].length,
    avgSalary: employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length
  };
};