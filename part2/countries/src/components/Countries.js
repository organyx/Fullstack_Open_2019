import React from 'react';
import Country from './Country';

const Countries = ({ countries, countryFilter }) => {
  const countriesFiltered = countries.filter(country =>
    country.name.toLowerCase().includes(countryFilter.toLowerCase())
  );

  if (countriesFiltered.length > 10) {
    return <div>Too many countries, be more specific</div>;
  } else if (countriesFiltered.length > 1 && countriesFiltered.length <= 10) {
    return (
      <div>
        {countriesFiltered.map(country => (
          <Country key={country.name} country={country} viewSimple={'true'} />
        ))}
      </div>
    );
  } else if (countriesFiltered.length === 1) {
    return (
      <div>
        {countriesFiltered.map(country => (
          <Country key={country.name} country={country} viewSimple={'false'} />
        ))}
      </div>
    );
  } else {
    return <div>No matches found</div>;
  }
};

export default Countries;
