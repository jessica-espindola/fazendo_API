import express from "express";
import vacinaController from "../controller/vacinaController.js";

const routes = express.Router();

routes.get("/vacinas", vacinaController.listarVacinas);
routes.get("/vacinas/:id", vacinaController.listarVacinasPorId);

routes.post("/vacinas", vacinaController.cadastrarVacina);

routes.put("/vacinas/:id", vacinaController.atualizarVacina);

routes.delete("/vacinas/:id", vacinaController.deletarVacina);

export default routes;