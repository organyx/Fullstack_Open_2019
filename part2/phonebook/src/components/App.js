import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import People from './People';
import Notification from './Notification';

import phonebookService from '../services/phonebookService';

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
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    phonebookService.getAllPeople().then(res => setPersons(res));
  }, []);

  const addName = event => {
    event.preventDefault();
    console.log('Click...', event.target);
    const personExists = persons.findIndex(person => person.name === newName);
    console.log('personExists :', personExists);
    if (personExists < 0 ? true : false) {
      console.log('Person does not exist');
      const personObject = {
        name: newName,
        phoneNumber: newPhoneNumber
      };

      phonebookService
        .addPerson(personObject)
        .then(res => {
          setPersons(persons.concat(res));
          setNewName('');
          setNewPhoneNumber('');
          setNotificationWithTimer(
            'success',
            `${res.name} was successfully added`
          );
        })
        .catch(error => {
          // setNotificationWithTimer('error', 'Could not add this person');
          console.log('error.response.data', error.response.data.error);
          setNotificationWithTimer('error', error.response.data.error);
        });
    } else {
      // window.alert(`${newName} is already added to phonebook`);
      if (window.confirm('Person already exists. Do you wish to update?')) {
        console.log('Person already exists');
        const currentPersonId = persons[personExists].id;
        console.log(currentPersonId);
        const personObject = {
          name: newName,
          phoneNumber: newPhoneNumber
        };
        phonebookService
          .updatePerson(currentPersonId, personObject)
          .then(res => {
            console.log(res);
            setPersons(
              persons.map(person =>
                person.id !== currentPersonId ? person : res
              )
            );
            setNewName('');
            setNewPhoneNumber('');
            setNotificationWithTimer(
              'success',
              `${res.name} was updated successfully`
            );
          })
          .catch(error => {
            // setNotificationWithTimer('error', 'Could not update');
            setNotificationWithTimer('error', error.response.data.error);
            setPersons(persons.filter(p => p.id !== currentPersonId));
          });
      } else {
        console.log('Do nothing');
      }
    }
  };

  const setNotificationWithTimer = (type, message) => {
    setNotification(setNotificatonObject(type, message));
    setTimeout(() => {
      setNotification(setNotificatonObject('', ''));
    }, 5000);
  };

  const setNotificatonObject = (type, message) => {
    return { type: type, message: message };
  };

  const deleteNameById = person => {
    console.log(person.name, person.id);
    if (window.confirm(`Delete ${person.name}?`)) {
      const tempName = person.name;
      console.log('Delete this person');
      phonebookService
        .deletePerson(person.id)
        .then(res => {
          console.log(res);
          setPersons(persons.filter(p => p.id !== person.id));
          setNewName('');
          setNewPhoneNumber('');
          setNotificationWithTimer(
            'success',
            `${tempName} was deleted successfully`
          );
        })
        .catch(error => {
          setNotificationWithTimer('error', 'Could not delete');
        });
    } else {
      console.log('Nothing happens');
    }
  };

  const clearAllFields = () => {
    setSeachFilter('');
    setNewName('');
    setNewPhoneNumber('');
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
      <Notification
        notificationMessage={notification.message}
        notificationType={notification.type}
      />
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <button type="submit" onClick={clearAllFields}>
        Clear
      </button>
      <h2>Numbers</h2>
      <People
        persons={persons}
        searchFilter={searchFilter}
        deleteName={deleteNameById}
      />
    </div>
  );
};

export default App;
