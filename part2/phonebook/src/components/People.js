import React from 'react';

import Person from './Person';

const People = ({ persons, searchFilter }) => {
  const personsList = persons
    .filter(person =>
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map(person => <Person key={person.name} person={person} />);

  return <ul>{personsList}</ul>;
};

export default People;
