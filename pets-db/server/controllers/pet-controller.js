import Pet from '../models/pet-model.js';

async function createPet(req, res) {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllPets(_, res) {
  try {
    const allPets = await Pet.find({});
    res.status(200).json(allPets);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOnePet(req, res) {
  const { id } = req.params;

  try {
    const onePet = await Pet.findById(id);
    res.status(200).json(onePet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateOnePet(req, res) {
  const { id } = req.params;

  try {
    const updatedPet = await Pet.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedPet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOnePet(req, res) {
  const { id } = req.params;
  console.log('deleting pet', id);

  try {
    const deletedPet = await Pet.findByIdAndDelete(id);
    res.status(200).json(deletedPet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { createPet, getAllPets, getOnePet, updateOnePet, deleteOnePet };
