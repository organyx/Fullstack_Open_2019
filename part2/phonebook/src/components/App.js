import React, { useState } from 'react';
import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456' },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchFilter, setSeachFilter] = useState('');

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

  const handleSearchFilterChange = event => {
    console.log('Target: ', event.target.value);
    setSeachFilter(event.target.value);
  };

  const personsList = persons
    .filter(person =>
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map(person => <Person key={person.name} person={person} />);

  return (
    <div>
      <div>debug: {newName}</div>
      Show names containing with:{' '}
      <input value={searchFilter} onChange={handleSearchFilterChange} />
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
