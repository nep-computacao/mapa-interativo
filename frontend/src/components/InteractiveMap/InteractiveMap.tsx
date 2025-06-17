import {
  GoogleMap,
  LoadScript,
  Marker,
  Libraries,
} from '@react-google-maps/api';
import { useMarkerHandlers } from '../../hooks/useMarkerHandlers';
import MarkerInfoWindow from '../../components/MarkerInfoWindow/MarkerInforWindow';
import styles from './InteractiveMap.module.css';
import { useMapStore } from '../../store/mapStore';
import { useEffect } from 'react';
import { setMarkerDistances } from '../../utils/mapUtils';

// Definindo o centro do mapa com as coordenadas da Unifor.
const center = {
  lat: -3.768791,
  lng: -38.478214,
};

const libraries: Libraries = ['geometry'];

const InteractiveMap: React.FC = () => {
  const { setMap, setUserLocation, userLocation } = useMapStore();
  const {
    markers,
    selectedMarker,
    setSelectedMarker,
    handleMarkerDragEnd,
    handleMapClick,
  } = useMarkerHandlers();

  const handleMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const current = {
            lat: position.coords.latitude,
            lng: position.coords.longitude, 
          };
          setUserLocation(current); // Atualiza a localização do usuário no estado.
          setMarkerDistances(current.lat, current.lng); // Atualiza as distâncias dos marcadores em relação à localização do usuário.
        },
        (error) => {
          console.error('Erro ao obter localização do usuário:', error);
        },
        {
          enableHighAccuracy: true, // Usa alta precisão para obter a localização.
          maximumAge: 0, // Não usa localização em cache.
          timeout: 5000, // Define um tempo limite de 5 segundos para obter a localização.
        }
      );
    }
  },[setUserLocation]);

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        onLoad={handleMapLoad}
        onClick={handleMapClick}
        mapContainerClassName={styles.mapContainer}
        center={center}
        zoom={16.5}
      >
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            }}
            title='Sua localização'
          />
        )}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            title={marker.titulo}
            draggable={true}
            onDragEnd={(e) => handleMarkerDragEnd(e, marker)}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <MarkerInfoWindow
            marker={selectedMarker}
            onClose={() => setSelectedMarker(null)}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default InteractiveMap;
