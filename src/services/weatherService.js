export async function consultarClimaReal() {
  try {
    // Usamos la API pública de Open-Meteo para consultar el clima en Santiago de Chile (lat: -33.45, lon: -70.66)
    // Puedes cambiar las coordenadas si prefieres otra ciudad.
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-33.45&longitude=-70.66&current_weather=true';
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('No se pudo conectar con el servicio de clima externo');
    }

    const data = await response.json();
    
    return {
      sistema: 'Open-Meteo API (Clima Real)',
      ubicacion: 'Santiago, Chile',
      temperaturaActual: `${data.current_weather.temperature} °C`,
      velocidadViento: `${data.current_weather.windspeed} km/h`,
      ultimaActualizacion: data.current_weather.time
    };
  } catch (error) {
    console.error('Error en la integración del clima:', error.message);
    throw error;
  }
}