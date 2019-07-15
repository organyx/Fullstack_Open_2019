import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAllPeople = () => {
  return axios.get(baseUrl).then(res => res.data);
};

const addPerson = person => {
  return axios.post(baseUrl, person).then(res => res.data);
};

export default {
  getAllPeople,
  addPerson
};
