//se importan librerias
import express from "express";
//Morgan para ver peticiones de servidor
import morgan from "morgan";

//inicializacion de Express
const app = express();
app.use(morgan("dev"));

export default app;
