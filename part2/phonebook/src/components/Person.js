import React from 'react';

const Person = ({ person }) => {
  return (
    <div>
      {person.name} : {person.phoneNumber}
    </div>
  );
};

export default Person;
