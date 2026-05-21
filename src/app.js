//se importan librerias
import express from "express";
//Morgan para ver peticiones de servidor
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import tasksRoutes from "./routes/tasks.routes.js";


//inicializacion de Express
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

app.use("/api", authRoutes, tasksRoutes);

export default app;
