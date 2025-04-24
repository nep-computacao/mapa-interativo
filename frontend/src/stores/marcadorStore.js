import { create } from 'zustand'

/**
 * Store Zustand para gerenciar o estado dos marcadores.
 * Esta store é responsável por armazenar, adicionar e atualizar marcadores no estado global.
 * Ela utiliza a biblioteca Zustand para gerenciar o estado de forma eficiente.
 */
export const useMarcadorStore = create((set) => ({
  /**
   * Este arrey armazena o estado dos marcadores no mapa.
   * 
   * @type {Array<{ id: number, latitude: number, longitude: number, titulo: string, descricao: string }>} - marcador 
   */
  marcadore: [],

  /**
   * Esta função atualiza o estado dos marcadores no mapa.
   *  
   * @param {Array} marcadores - O novo estado dos marcadores.
   * @returns {void}
   */
  definirMarcadores: (marcadores) => set({ marcadores })
})) 