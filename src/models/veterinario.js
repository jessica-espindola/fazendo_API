import mongoose from "mongoose";

const veterinarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    crmv: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false });

const veterinario = mongoose.model("veterinario", veterinarioSchema);

export { veterinario, veterinarioSchema };