import React from 'react';

const Country = ({ country, viewSimple }) => {
  if (viewSimple === 'true') {
    return <div>{country.name}</div>;
  } else {
    const langs = country.languages.map(lang => (
      <li key={lang.name}>{lang.name}</li>
    ));
    return (
      <div>
        <h1>{country.name}</h1>
        <br />
        Capital: {country.capital}
        <br />
        Population: {country.population}
        <br />
        Languages
        <br />
        <ul>{langs}</ul>
        <img
          src={country.flag}
          style={({ width: '100px' }, { height: '70px' })}
          alt="flag"
        />
      </div>
    );
  }
};

export default Country;
