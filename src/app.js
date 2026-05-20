//se importan librerias
import express from "express";
//Morgan para ver peticiones de servidor
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

//inicializacion de Express
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api",authRoutes);

export default app;
