import React from 'react';

const SearchBar = ({ 
  searchTerm, 
  onSearch, 
  departments, 
  selectedDepartment, 
  onFilterDepartment,
  selectedStatus,
  onFilterStatus,
  onClearFilters
}) => {
  return (
    <div className="search-bar">
      <div className="search-section">
        <h3>Search & Filter</h3>
        <div className="search-controls">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search by name, email, or position..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-group">
            <select 
              value={selectedDepartment} 
              onChange={(e) => onFilterDepartment(e.target.value)}
              className="filter-select"
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            
            <select 
              value={selectedStatus} 
              onChange={(e) => onFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            
            <button 
              onClick={onClearFilters}
              className="btn btn-secondary btn-small"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;