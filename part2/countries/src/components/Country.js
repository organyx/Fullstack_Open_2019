import React from 'react';

const Country = ({ country, viewSimple, buttonClickHandler }) => {
  if (viewSimple === 'true') {
    return (
      <div>
        {country.name}
        <button value={country.name} onClick={buttonClickHandler}>
          Details
        </button>
      </div>
    );
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
