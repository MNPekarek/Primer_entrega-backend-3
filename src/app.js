// src/app.js
import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routers/mocks.router.js';
import usersRouter from './routers/usersRouter.js';
import petsRouter from './routers/pets.router.js';
import homeRouter from './routers/home.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

app.use('/', homeRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);   


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});