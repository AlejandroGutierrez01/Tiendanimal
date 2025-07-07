import {Router} from 'express'
import { comprobarTokenPasword, login, nuevoPassword, recuperarPassword,actualizarPassword, actualizarPerfil, perfilAdministrador, eliminarUsuarioCliente} from '../controllers/admin_controler.js'
import { verificarAutenticacion } from '../helpers/crearJWT.js'

const router = Router()

router.post("/login", login)

router.post("/recuperar-password/", recuperarPassword)

router.get("/recuperar-password/:token", comprobarTokenPasword)

router.post("/nuevo-password/:token", nuevoPassword)

router.put("/actualizar-password",verificarAutenticacion, actualizarPassword);

router.get('/perfil',verificarAutenticacion, perfilAdministrador)

router.put('/perfil/:id',verificarAutenticacion, actualizarPerfil);

router.delete('/eliminar-usuario/:id', verificarAutenticacion, eliminarUsuarioCliente);

export default router