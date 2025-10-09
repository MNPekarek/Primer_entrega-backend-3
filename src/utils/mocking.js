import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";

const encryptedPassword = bcrypt.hashSync('coder123', bcrypt.genSaltSync(10));

export const generateUser = () => {
    const pets = [];
    const role = faker.helpers.arrayElement(['user', 'admin']);

    return {
        _id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 80 }),
        password: encryptedPassword,
        role: role,
        pets: pets,
    };
};

export const generatePet = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.animal.dog(),
        specie: 'Dog',
        birthDate: faker.date.past(),
    };
};