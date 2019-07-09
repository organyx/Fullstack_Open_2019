import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import PersonForm from './PersonForm';
import People from './People';

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

  const dbUrl = 'http://localhost:3001/persons';

  useEffect(() => {
    axios.get(dbUrl).then(res => {
      setPersons(res.data);
    });
  }, []);

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

  return (
    <div>
      <Filter
        searchFilter={searchFilter}
        handleSearchFilterChange={handleSearchFilterChange}
      />
      <h2>Phonebook</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h2>Numbers</h2>
      <People persons={persons} searchFilter={searchFilter} />
    </div>
  );
};

export default App;
