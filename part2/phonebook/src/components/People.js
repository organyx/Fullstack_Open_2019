import React from 'react';

import Person from './Person';

const People = ({ persons, searchFilter, deleteName }) => {
  const personsList = persons
    .filter(person =>
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map(person => (
      <Person
        key={person.name}
        person={person}
        deleteName={() => deleteName(person)}
      />
    ));

  return <ul>{personsList}</ul>;
};

export default People;
