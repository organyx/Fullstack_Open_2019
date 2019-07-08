import React, { useState } from 'react';
import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = event => {
    event.preventDefault();
    console.log('Click...', event.target);
    const personObject = {
      name: newName
    };

    setPersons(persons.concat(personObject));
    setNewName('');
  };

  const handleNameChange = event => {
    console.log('Target: ', event.target.value);
    setNewName(event.target.value);
  };

  const personsList = persons.map(person => (
    <Person key={person.name} person={person} />
  ));

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{personsList}</ul>
    </div>
  );
};

export default App;
