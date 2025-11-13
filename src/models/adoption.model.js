import mongoose from "mongoose";

const AdoptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pets",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const AdoptionModel = mongoose.model("Adoption", AdoptionSchema);
export default AdoptionModel;
