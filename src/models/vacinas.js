import mongoose from "mongoose";

const vacinaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nomePet: { type: String, required: true },
    veterinario: { type: String, required: true },
    vacina: { type: String, required: true},
    dataAplicacao: { type: Date, required: true },
    observacao: { type: String }
},{ versionKey: false });

const vacina = mongoose.model("vacinas", vacinaSchema);

export default vacina;