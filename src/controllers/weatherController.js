import { consultarClimaReal } from '../services/weatherService.js';

export async function obtenerClima(req, res) {
  try {
    const climaData = await consultarClimaReal();
    
    res.status(200).json({
      exito: true,
      mensaje: 'Datos meteorológicos obtenidos mediante integración externa',
      datos: climaData
    });
  } catch (error) {
    res.status(500).json({
      exito: false,
      mensaje: 'Hubo un error al consultar el servicio externo de clima',
      error: error.message
    });
  }
}