import express from "express";
import vacinas from "./vacinaRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), vacinas)
}

export default routes;