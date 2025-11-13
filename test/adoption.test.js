import { expect } from "chai";
import request from "supertest";
import app from "../src/app.js";
import UserModel from "../src/models/user.model.js";
import PetModel from "../src/models/pet.model.js";
import AdoptionModel from "../src/models/adoption.model.js";

describe("Adoption API Test", () => {
  let user;
  let pet;
  let adoption;

  before(async () => {
    await AdoptionModel.deleteMany();
    await UserModel.deleteMany();
    await PetModel.deleteMany();

    user = await UserModel.create({
      first_name: "Test",
      last_name: "User",
      email: "test@test.com",
      password: "123456",
      age: 30,
    });

    pet = await PetModel.create({
      name: "Firulais",
      specie: "dog",
      birthDate: new Date("2020-01-01"),
    });
  });

  it("POST /api/adoptions debe crear una adopción", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({ user: user._id, pet: pet._id });

    adoption = res.body.payload;

    expect(res.status).to.equal(201);
    expect(adoption).to.have.property("_id");
  });

  it("GET /api/adoptions debe listar adopciones", async () => {
    const res = await request(app).get("/api/adoptions");

    expect(res.status).to.equal(200);
    expect(res.body.payload).to.be.an("array");
  });

  it("GET /api/adoptions/:id debe obtener una adopción", async () => {
    const res = await request(app).get(`/api/adoptions/${adoption._id}`);

    expect(res.status).to.equal(200);
    expect(res.body.payload).to.have.property("_id");
  });

  it("DELETE /api/adoptions/:id debe eliminar una adopción", async () => {
    const res = await request(app).delete(`/api/adoptions/${adoption._id}`);

    expect(res.status).to.equal(200);
  });
});
