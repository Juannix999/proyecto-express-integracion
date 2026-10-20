import { Router } from 'express';
import { manejarIntegracion } from '../controllers/apiController.js';
import { obtenerClima } from '../controllers/weatherController.js'; // 👈 Importamos el nuevo controlador

const router = Router();

// Ruta de prueba anterior
router.get('/integrar', manejarIntegracion);

// 👈 Nueva ruta para el clima real: GET http://localhost:3000/api/clima
router.get('/clima', obtenerClima);

export default router;