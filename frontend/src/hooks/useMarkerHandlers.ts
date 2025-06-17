import { useEffect, useState } from 'react';
import { getMarkers, updateMarker } from '../services/markerService';
import { useMarkerStore } from '../store/markerStore';
import { useMarkerFormStore } from '../store/FormStore';
import { MarkerType } from '../types/marker';

export const useMarkerHandlers = () => {
  const markers = useMarkerStore((state) => state.markers);
  const setMarkers = useMarkerStore((state) => state.setMarkers);
  const replaceMarker = useMarkerStore((state) => state.replaceMarker);
  const setField = useMarkerFormStore((state) => state.setField);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null); // Estado para armazenar o marcador selecionado.

  // Buscar marcadores da API quando o componente for montado e atualizar o store.
  // Isso garante que os marcadores sejam carregados assim que o componente for exibido.
  useEffect(() => {
    const fetchMarkers = async () => {
      const data = await getMarkers();
      setMarkers(data);
    };

    fetchMarkers();
  }, [setMarkers]);

  // Atualizar o marcador no store e no banco de dados quando o usuário clicar em um marcador e arrastalo.
  const handleMarkerDragEnd = async (
    e: google.maps.MapMouseEvent,
    marker: MarkerType
  ) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();

    if (lat !== undefined && lng !== undefined) {
      // Atualiza a latitude e longitude do marcador no store.
      replaceMarker(marker.id, { latitude: lat, longitude: lng });

      try {
        // Atualiza a latitude e longitude do marcador no banco de dados.
        await updateMarker({
          id: marker.id,
          titulo: marker.titulo,
          descricao: marker.descricao,
          latitude: lat,
          longitude: lng,
        });
      } catch (error) {
        console.error('Erro ao atualizar marcador no banco:', error);
      }
    }
  };

  // Função para lidar com o clique no mapa e definir a latitude e longitude no formulário.
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();

      // Quando o usuário clicar no mapa, a latitude e longitude do ponto clicado serão definidas no store.
      if (lat !== undefined && lng !== undefined) {
        setField('latitude', lat);
        setField('longitude', lng);
      }
    }
  };

  return { markers, selectedMarker, setSelectedMarker, handleMarkerDragEnd, handleMapClick };
}