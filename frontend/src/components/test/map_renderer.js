import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./map_renderer.module.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: -3.769996,
  lng: -38.479432,
};

const map_bound = {
  north: -3.765832,
  south: -3.771791,
  west: -38.482476,
  east: -38.472853,
}

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState({ lat: "", lng: "", title: "" });
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    setMarkers([{ ...defaultCenter, title: "Ponto Inicial - Campus Unifor Bloco J" }]);
    if (map) {

      const bounds = new window.google.maps.LatLngBounds();

      const point1 = new window.google.maps.LatLng(40.748817, -73.985428);
      const point2 = new window.google.maps.LatLng(34.052235, -118.243683);

      bounds.extend(point1);
      bounds.extend(point2);

      map.fitBounds(bounds);
    }
  }, [map]);

  const handleClick = (event) => {
    const newPoint = { lat: event.latLng.lat(), lng: event.latLng.lng(), title: `Ponto ${markers.length + 1}` };
    setMarkers((prev) => [...prev, newPoint]);
  };

  const handleAddMarker = () => {
    const lat = parseFloat(newMarker.lat);
    const lng = parseFloat(newMarker.lng);
    if (!isNaN(lat) && !isNaN(lng) && newMarker.title.trim() !== "") {
      setMarkers([...markers, { lat, lng, title: newMarker.title }]);
      setNewMarker({ lat: "", lng: "", title: "" });
    }
  };

  const handleRemoveMarker = (index) => {
    setMarkers(markers.filter((_, i) => i !== index));
  };

  const handleMarkerClick = (lat, lng) => {
    if (mapRef) {
      mapRef.panTo({ lat, lng });
      setCenter({ lat, lng });
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBvwJw5pbsA4an1b_NIlHIw8WkliCxwcnk">
      <div className={styles.container}>
        <h1>Mapa Interativo</h1>

        <div className={styles.inputContainer}>
          <input type="text" placeholder="Latitude" value={newMarker.lat} onChange={(e) => setNewMarker({ ...newMarker, lat: e.target.value })} />
          <input type="text" placeholder="Longitude" value={newMarker.lng} onChange={(e) => setNewMarker({ ...newMarker, lng: e.target.value })} />
          <input type="text" placeholder="Nome do Ponto" value={newMarker.title} onChange={(e) => setNewMarker({ ...newMarker, title: e.target.value })} />
          <button onClick={handleAddMarker}>Adicionar Ponto</button>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onClick={handleClick}
          onLoad={(map) => setMapRef(map)}>
          {markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
          ))}
        </GoogleMap>

        <div className={styles.MarkerBox}>
          <div className={styles.textMarker}>
            <h3>Lista de Marcadores</h3>
          </div>
          <ul>
            {markers.map((marker, index) => (
              <li key={index}>
                <span onClick={() => handleMarkerClick(marker.lat, marker.lng)}>
                  {marker.title} ({marker.lat.toFixed(4)}, {marker.lng.toFixed(4)})
                </span>
                <button onClick={() => handleRemoveMarker(index)} className={styles.removeButton}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LoadScript>
  );
};

export default MapComponent;