import React from 'react';

const Filter = ({ countryFilter, handleCountryFilterChange }) => {
  return (
    <div>
      Search for Country{' '}
      <input value={countryFilter} onChange={handleCountryFilterChange} />
    </div>
  );
};

export default Filter;
