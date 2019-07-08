import React, { useState } from 'react';
import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '345363546435' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const addName = event => {
    event.preventDefault();
    console.log('Click...', event.target);
    if (persons.filter(person => person.name === newName).length === 0) {
      const personObject = {
        name: newName,
        phoneNumber: newPhoneNumber
      };

      setPersons(persons.concat(personObject));
      setNewName('');
      setNewPhoneNumber('');
      return;
    }
    window.alert(`${newName} is already added to phonebook`);
  };

  const handleNameChange = event => {
    console.log('Target: ', event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = event => {
    console.log('Target: ', event.target.value);
    setNewPhoneNumber(event.target.value);
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
          number:{' '}
          <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
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
