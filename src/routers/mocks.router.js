import { Router } from "express";
import { generateUser, generatePet } from "../utils/mocking.js";
import UserModel from "../models/user.model.js";
import PetModel from "../models/pet.model.js";
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.get('/mockingpets', (req, res) => {
    const pets = [];
    for (let i = 0; i <20; i++) {
        pets.push(generatePet());
    }
    res.json({ status: 'success', payload: pets });
})

// generate usuarios
router.get('/mockingusers', (req, res) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push(generateUser());
    }
    res.json({ status: 'success', payload: users });
})

// generate data
router.post('/generateData', async (req, res) => {
    const { users: userCount = 10, pets: petCount = 5 } = req.body;

    try {
        const usersToInsert = [];
        for (let i = 0; i < userCount; i++) {
            const { _id, ...user } = generateUser();
            usersToInsert.push(user);
        }

        const petsToInsert = [];
        for (let i = 0; i < petCount; i++) {
            const { _id, ...pet } = generatePet();
            petsToInsert.push(pet);
        }

        const userResult = await UserModel.insertMany(usersToInsert);
        const petsResult = await PetModel.insertMany(petsToInsert);

        res.status(201).json({
            status: 'success',
            message: `Se agregaron ${userResult.length} usuarios y ${petsResult.length} mascotas.`,
            payload: {users: userResult, pets: petsResult}
        });
    } catch (error) {
        console.error("Error generando datos:", error);
        res.status(500).json({ status: 'error', message: 'No se pudieron generar los datos.' });
    }
});

export default router;