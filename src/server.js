import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userrouter from './routers/usuario_router.js';


const app = express();
dotenv.config();

app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use(express.json());

// Rutas de la API
app.use('/api', userrouter);

// Ruta principal
app.get('/', (req, res) => {
    res.send("Servidor del sistema TIENDANIMAL 🐶🦴🏪🛒");
});

// Manejo de rutas no encontradas para la API
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

export default app;