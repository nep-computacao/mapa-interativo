import { MarkerType } from "../types/marker";

const API_URL = "https://marcadores-api.onrender.com/marcadores"; // Substitua pela URL da sua API

// Função para buscar todos os marcadores
export const getMarkers = async (): Promise<MarkerType[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar os marcadores");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Função para adicionar um novo marcador
export async function postMarker(marker: Partial<MarkerType>): Promise<MarkerType> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(marker),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro na API: ${response.status} - ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

// Função para atualizar um marcador
export async function updateMarker(marker: Partial<MarkerType>): Promise<MarkerType> {
  try {
    const response = await fetch(`${API_URL}/${marker.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(marker),
    });
    if (!response.ok) throw new Error('Erro ao atualizar marcador');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

// Função para deletar um marcador
export async function deleteMarker(id: number): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Erro ao deletar marcador');
    return true;
  } catch (error) {
    console.error('Erro:', error);
    return false;
  }
}