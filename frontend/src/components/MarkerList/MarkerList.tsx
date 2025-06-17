import { deleteMarker } from '../../services/markerService';
import { useMarkerStore } from '../../store/markerStore';
import { useMapStore } from '../../store/mapStore';
import styles from './MarkerList.module.css';

const MarkerList = () => {
  const markers = useMarkerStore((state) => state.markers);
  const removeMarker = useMarkerStore((state) => state.removeMarker);
  const centerMapOnMarker = useMapStore((state) => state.centerMapOnMarker);

  // Função para lidar com a exclusão de um marcador
  const handleDelete = async (id: number) => {
    try {
      deleteMarker(id); // Chama a função de exclusão da API
      removeMarker(id); // Remove o marcador do store
    } catch (error) {
      console.error('Erro ao excluir o marcador:', error);
    }
  };

  return (
    <section className={styles.marker_list_container}>
      <h2 className={styles.header_list}>Marcadores</h2>
      <ul className={styles.marker_list}>
        {markers.map((marker) => (
          <li key={marker.id} className={styles.marker_item}>
            <h3>{marker.titulo}</h3>
            <p>{marker.descricao}</p>
            {marker.distanciaKm && (
              <>
                <p>Distância: {marker.distanciaKm.toFixed(2)} km</p>
              </>
            )}
            <div className='marker-buttons'>
              <button 
                className='btn-ver'
                onClick={() => centerMapOnMarker(marker)}
              >Ver no Mapa</button>
              <button
                className='btn-excluir'
                onClick={() => handleDelete(marker.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MarkerList;
