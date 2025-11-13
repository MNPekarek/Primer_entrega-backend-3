import { Router } from "express";
import AdoptionModel from "../models/adoption.model.js";
import UserModel from "../models/user.model.js";
import PetModel from "../models/pet.model.js";

const router = Router();

// GET todas las adopciones
router.get("/", async (req, res) => {
  try {
    const adoptions = await AdoptionModel.find()
      .populate("user")
      .populate("pet");

    res.json({ status: "success", payload: adoptions });
  } catch (error) {
    res.status(500).json({ status: "error", message: "No se pudieron obtener las adopciones." });
  }
});

// GET adopción por ID
router.get("/:id", async (req, res) => {
  try {
    const adoption = await AdoptionModel.findById(req.params.id)
      .populate("user")
      .populate("pet");

    if (!adoption) {
      return res.status(404).json({ status: "error", message: "Adopción no encontrada" });
    }

    res.json({ status: "success", payload: adoption });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error buscando la adopción" });
  }
});

// POST crear adopción
router.post("/", async (req, res) => {
  const { user, pet } = req.body;

  if (!user || !pet) {
    return res.status(400).json({ status: "error", message: "Faltan datos obligatorios" });
  }

  try {
    const userExists = await UserModel.findById(user);
    const petExists = await PetModel.findById(pet);

    if (!userExists || !petExists) {
      return res.status(404).json({ status: "error", message: "Usuario o mascota no encontrados" });
    }

    const adoption = await AdoptionModel.create({ user, pet });

    res.status(201).json({ status: "success", payload: adoption });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error creando adopción" });
  }
});

// DELETE eliminar adopción
router.delete("/:id", async (req, res) => {
  try {
    const adoption = await AdoptionModel.findByIdAndDelete(req.params.id);

    if (!adoption) {
      return res.status(404).json({ status: "error", message: "Adopción no encontrada" });
    }

    res.json({ status: "success", message: "Adopción eliminada" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error eliminando adopción" });
  }
});

export default router;
