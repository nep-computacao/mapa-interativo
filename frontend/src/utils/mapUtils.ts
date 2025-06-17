import { useMarkerStore } from '../store/markerStore';

// Função de cálculo de distância entre duas coordenadas
function calcularDistancia(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // raio da Terra em km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distância em km
}

// Essa função será chamada no useEffect
export function setMarkerDistances(userLat: number, userLng: number) {
  const { markers, updateMarkerDistance } = useMarkerStore.getState();

  markers.forEach((marker) => {
    const distance = calcularDistancia(
      userLat,
      userLng,
      marker.latitude,
      marker.longitude
    );

    updateMarkerDistance(marker.id, distance);
  });
}