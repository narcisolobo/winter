import axios from 'axios';

// create axios instance
const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

async function createPet(pet) {
  try {
    const res = await http.post('/pets', pet);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function getAllPets() {
  try {
    const response = await http.get('/pets');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getOnePet(petId) {
  try {
    const response = await http.get(`/pets/${petId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function updateOnePet(pet) {
  try {
    const response = await http.patch(`/pets/${pet._id}`, pet);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function deleteOnePet(petId) {
  try {
    const response = await http.delete(`/pets/${petId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { createPet, getAllPets, getOnePet, updateOnePet, deleteOnePet };
