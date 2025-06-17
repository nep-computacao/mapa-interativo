import { MarkerType } from '../../types/marker';
import { InfoWindow } from '@react-google-maps/api';
import styles from './MarkerInfoWindow.module.css';

interface Props {
  marker: MarkerType;
  onClose: () => void;
}

const MarkerInfoWindow: React.FC<Props> = ({ marker, onClose }) => (
  <InfoWindow position={{ lat: marker.latitude, lng: marker.longitude }} onCloseClick={onClose}>
    <div className={styles.infoWindow}>
      <h3>{marker.titulo}</h3>
      <p>{marker.descricao}</p>
    </div>
  </InfoWindow>
);

export default MarkerInfoWindow;