import { Router } from 'express';

import {
  createPet,
  getAllPets,
  getOnePet,
  updateOnePet,
  deleteOnePet,
} from '../controllers/pet-controller.js';

const petRouter = Router();

// prettier-ignore
petRouter
  .route('/')
  .post(createPet)
  .get(getAllPets);

// prettier-ignore
petRouter
  .route('/:id')
  .get(getOnePet)
  .put(updateOnePet)
  .patch(updateOnePet)
  .delete(deleteOnePet);

export default petRouter;
