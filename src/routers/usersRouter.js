import { Router } from 'express';
import UserModel from '../models/user.model.js';

const router = Router();

// GET todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ status: 'success', payload: users });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'No se pudieron obtener los usuarios.' });
  }
});

export default router;