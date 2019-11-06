import axios from 'axios';

const baseUrl = '/api/people';

const getAllPeople = () => {
  return axios.get(baseUrl).then(res => res.data);
};

const addPerson = person => {
  return axios.post(baseUrl, person).then(res => res.data);
};

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`).then(res => res.data);
};

const updatePerson = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson).then(res => res.data);
};

export default {
  getAllPeople,
  addPerson,
  deletePerson,
  updatePerson
};
