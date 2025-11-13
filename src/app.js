import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routers/mocks.router.js';
import usersRouter from './routers/usersRouter.js';
import petsRouter from './routers/pets.router.js';
import homeRouter from './routers/home.router.js';
import adoptionRouter from './routers/adoption.router.js'
import { swaggerSpecs, swaggerUi } from './swagger.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    
app.use('/', homeRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);  
app.use('/api/adoptions', adoptionRouter); 


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

export default app;