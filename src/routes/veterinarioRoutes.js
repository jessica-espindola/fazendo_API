import express from "express";
import veterinarioController from "../controller/veterinarioController.js";

const routes = express.Router();

routes.get("/veterinario", veterinarioController.listarVet);
routes.get("/veterinario/:id", veterinarioController.listarVetPorId);

routes.post("/veterinario", veterinarioController.cadastrarVet);

routes.put("/veterinario/:id", veterinarioController.atualizarVet);

routes.delete("/veterinario/:id", veterinarioController.deletarVet);

export default routes;