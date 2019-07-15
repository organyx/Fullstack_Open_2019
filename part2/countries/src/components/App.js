import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './Filter';
import Countries from './Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCoutryFilter] = useState('');

  const dbUrl = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    axios
      .get(dbUrl)
      .then(res => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch(error => console.log('Error', error));
  }, []);

  const handleCountryFilterChange = event => {
    setCoutryFilter(event.target.value);
  };

  return (
    <div>
      <Filter
        countryFilter={countryFilter}
        handleCountryFilterChange={handleCountryFilterChange}
      />
      <Countries countries={countries} countryFilter={countryFilter} />
    </div>
  );
};

export default App;
