import { Router } from 'express';
import PetModel from '../models/pet.model.js';

const router = Router();

// GET todas las mascotas
router.get('/', async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json({ status: 'success', payload: pets });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'No se pudieron obtener las mascotas.' });
  }
});

export default router;