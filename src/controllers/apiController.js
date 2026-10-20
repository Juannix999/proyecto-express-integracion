import { consultarSistemaExterno } from '../services/integrationService.js';

export async function manejarIntegracion(req, res) {
  try {
    // Llamamos a la función de integración que programamos en el servicio
    const resultado = await consultarSistemaExterno();

    res.status(200).json({
      exito: true,
      mensaje: 'Proceso de integración ejecutado correctamente',
      resultado
    });
  } catch (error) {
    res.status(500).json({
      exito: false,
      mensaje: 'Hubo un error en el proceso de integración',
      error: error.message
    });
  }
}