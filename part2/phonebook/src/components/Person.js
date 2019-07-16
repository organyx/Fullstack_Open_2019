import React from 'react';

const Person = ({ person, deleteName }) => {
  return (
    <div>
      {person.name} : {person.phoneNumber}
      &nbsp;
      <button onClick={deleteName}>Delete</button>
    </div>
  );
};

export default Person;
