import { veterinario } from "../models/veterinario.js";

class veterinarioController {

    static async listarVet (req, res) {
        try {
            const listaVet = await veterinario.find({});
            res.status(200).json(listaVet);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        } 
    }

    static async listarVetPorId (req, res) {
        try {
            const id = req.params.id;
            const vetEncontrado = await veterinario.findById(id);
            res.status(200).json(vetEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição da vacina`});
        } 
    }

    static async cadastrarVet (req, res) {
        try {
            const novoVet = await veterinario.create(req.body);
            res.status(201).json({ message: "criado com sucesso", veterinario: novoVet});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar veterinario`})
        }
    }

    static async atualizarVet (req, res) {
        try {
            const id = req.params.id;
            await veterinario.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "veterinario atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do veterinario`});
        } 
    }

    static async deletarVet (req, res) {
        try {
            const id = req.params.id;
            await veterinario.findByIdAndDelete(id);
            res.status(200).json({ message: "veterinario excluída com sucesso"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do veterinario`});
        } 
    }

};

export default veterinarioController;