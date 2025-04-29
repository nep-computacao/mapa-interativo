const API_URL = 'http://127.0.0.1:8000/marcadores';

/**
 * Função para buscar marcadores da API.
 *
 * @returns {Promise<Array>} Retorna uma lista de marcadores.
 * @throws {Error} Lança um erro se a requisição falhar. 
 */
export async function getMarcadores() {
  try {
    const response = await fetch(API_URL)
    console.log('Marcadores:', response)
    if (!response.ok) {
      throw new Error('Erro ao buscar marcadores');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar marcadores:', error);
    return [];
  }
}

/**
 * Função para adicionar um novo marcador na API.
 * 
 * @param {Object} marcador - Objeto que representa o marcador a ser adicionado.
 * @returns {Promise<Object>} Retorna o marcador adicionado.
 * @throws {Error} Lança um erro se a requisição falhar.
 */
export async function postMarcador(marcador) {
  // Samuel
}

/**
 * Função para buscar um marcador específico da API.
 *
 * @param {number} id - ID do marcador a ser buscado.
 * @returns {Promise<Object>} Retorna o marcador encontrado.
 * @throws {Error} Lança um erro se a requisição falhar.
 */
export async function updateMarcador(marcador) {
  // Plinio
}

/**
 * Função para deletar um marcador da API.
 *
 * @param {number} id - ID do marcador a ser deletado.
 * @returns {Promise<void>} Retorna uma promessa que resolve quando o marcador for deletado.
 * @throws {Error} Lança um erro se a requisição falhar.
 */
export async function deleteMarcador(id) {
  // Larissa
}
