import { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

import { useMarcadorStore } from '../../stores/marcadorStore'
import { getMarcadores } from '../../services/MarcadorService'
import styles from './Mapa.module.css'

// Obejeto center contem as cordenadas inicias do mapa.
const center = {
  lat: -3.768791,
  lng: -38.478214,
}

/**
 * Componete Mapa
 * 
 * Este componete renderiza um mapa do Goolge Maps e exibe marcadores nele.
 * 
 * @returns {JSX.Element} - Componente Mapa
 */
export default function Mapa() {
  const marcadores = useMarcadorStore((state) => state.marcadores)
  const definirMarcadores = useMarcadorStore((state) => state.definirMarcadores)

  /** 
   * O hook useEffect é chamado quando o componente é montado e busca os marcadores
   * da API e atualiza o estado dos marcadores com os dados recebidos.
   */
  useEffect(() => {
    async function fechMarcadores() {
      const data = await getMarcadores()
      definirMarcadores(data)
    }
    fechMarcadores()
  }, [definirMarcadores])

  return (
    <LoadScript 
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        // onClick={handleMarkerClick}
        mapContainerClassName={styles.mapContainer}
        zoom={16.2}
        center={center}
        // onLoad={onLoad}
      >
        {marcadores?.map((marcador) => (
          <Marker
            key={marcador.id}
            position={{ lat: marcador.latitude, lng: marcador.longitude }}
            title={marcador.titulo}
            draggable={true}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}