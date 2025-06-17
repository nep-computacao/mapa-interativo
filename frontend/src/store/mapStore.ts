import { create } from "zustand";
import { MarkerType } from "../types/marker";
import { setMarkerDistances } from "../utils/mapUtils";

interface MapStore {
  map: google.maps.Map | null;
  userLocation: google.maps.LatLngLiteral | null;
  setMap: (map: google.maps.Map) => void;
  setUserLocation: (location: google.maps.LatLngLiteral) => void;
  centerMapOnMarker: (marker: MarkerType) => void;
}

export const useMapStore = create<MapStore>((set, get) => ({
  map: null,
  userLocation: null,
  setMap: (map) => set({ map }),
  setUserLocation: (location) => {
    set({ userLocation: location })
    setMarkerDistances(location.lat, location.lng); // Atualiza as distâncias dos marcadores em relação à localização do usuário.}
  },
  centerMapOnMarker: (marker) => {
    const map = get().map;
    if (map) {
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      map.setCenter(position);
      map.setZoom(18); // Define o nível de zoom do mapa.
    }
  },
}));
