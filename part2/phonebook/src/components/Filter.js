import React from 'react';

const Filter = ({ searchFilter, handleSearchFilterChange }) => {
  return (
    <div>
      Show names containing with:{' '}
      <input value={searchFilter} onChange={handleSearchFilterChange} />
    </div>
  );
};

export default Filter;
