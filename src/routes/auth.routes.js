//se importan las rutas desde Router para facilitar la conexión
import {Router} from 'express';
//se importan funciones desde el controller para el manejo de las rutas
import {login, logout, register} from "../controllers/auth.controller.js";

const router = Router();
//Se crean las rutas
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;