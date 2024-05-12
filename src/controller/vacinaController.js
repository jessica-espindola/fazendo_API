import vacina from "../models/vacinas.js";

class vacinaController {

    static async listarVacinas (req, res) {
        try {
            const listaVacinas = await vacina.find({});
            res.status(200).json(listaVacinas);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        } 
    }

    static async listarVacinasPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await vacina.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
        } 
    }

    static async cadastrarVacina (req, res) {
        try {
            const novaVacina = await vacina.create(req.body);
            res.status(201).json({ message: "criado com sucesso", vacina: novaVacina});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar vacina    `})
        }
    }

    static async atualizarVacina (req, res) {
        try {
            const id = req.params.id;
            await vacina.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro`});
        } 
    }

};

export default vacinaController;