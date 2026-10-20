export async function consultarSistemaExterno() {
  try {
    // Usamos una API pública de prueba (JSONPlaceholder) simulando un sistema externo
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error('Error al conectar con el sistema externo');
    }

    const data = await response.json();
    return {
      origen: 'Sistema Externo Conectado con Éxito',
      datos: data
    };
  } catch (error) {
    console.error('Falla en la integración:', error.message);
    throw error;
  }
}