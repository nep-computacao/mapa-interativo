const API_URL = 'http://127.0.0.1:8000/marcadores';

/**
 * Função para buscar marcadores da API.
 *
 * @returns {Promise<Array>} Retorna uma lista de marcadores.
 * @throws {Error} Lança um erro se a requisição falhar.
 */
export async function getMarcadores() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar marcador!');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
