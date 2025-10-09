import mongoose from 'mongoose';

const petCollection = 'pets';

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

const PetModel = mongoose.model(petCollection, petSchema);

export default PetModel;