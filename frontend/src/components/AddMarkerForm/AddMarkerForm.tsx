import { useMarkerStore } from '../../store/markerStore';
import { useMarkerFormStore } from '../../store/FormStore';
import { postMarker } from '../../services/markerService';
import { MarkerType } from '../../types/marker';
import styles from './AddMarkerForm.module.css';

const AddMarkerForm: React.FC = () => {
  const addMarker = useMarkerStore((state) => state.addMarker);
  const replaceMarker = useMarkerStore((state) => state.replaceMarker);

  const marker = useMarkerFormStore((state) => state.marker);
  const setField = useMarkerFormStore((state) => state.setField);
  const reset = useMarkerFormStore((state) => state.reset);

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setField(id as keyof MarkerType, value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cria um id temporário para o marcador.
    // O ID temporário é usado para garantir que o marcador seja único até que a API retorne um ID real.
    const tempId = marker.id || Math.floor(Math.random() * 1000);

    // Cria um novo marcador com os dados do formulário.
    const newMarker = {
      id: tempId,
      latitude: Number(marker.latitude),
      longitude: Number(marker.longitude),
      titulo: String(marker.titulo),
      descricao: String(marker.descricao),
    };

    // Adiciona o novo marcador ao store com um ID temporário
    addMarker(newMarker);

    try {
      // Envia o novo marcador para a API
      const created = await postMarker({
        titulo: newMarker.titulo,
        descricao: newMarker.descricao,
        latitude: newMarker.latitude,
        longitude: newMarker.longitude,
      });

      // Atualiza o marcador no store com o ID retornado da API
      // Isso garante que o ID do marcador seja consistente entre o store e a API.
      replaceMarker(tempId, created);
      alert('Marcador adicionado com sucesso!');

      // Limpa o formulário após adicionar o marcador
      reset();
    } catch (error) {
      console.error('Erro ao adicionar o marcador:', error);
    }
  };

  return (
    <aside className={styles.container_form}>
      <h2 className={styles.title}>Adicionar Marcador</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='latitude'>Latitude:</label>
        <input
          type='number'
          id='latitude'
          value={marker.latitude ?? ''}
          placeholder='Click no mapa'
          onChange={handleChange}
          readOnly
          className={styles.input}
        />

        <label htmlFor='longitude'>Longitude:</label>
        <input
          type='number'
          id='longitude'
          value={marker.longitude ?? ''}
          placeholder='Click no mapa'
          onChange={handleChange}
          readOnly
          className={styles.input}
        />

        <label htmlFor='titulo'>Nome do Marcador:</label>
        <input
          type='text'
          id='titulo'
          placeholder='Título do marcador'
          onChange={handleChange}
          className={styles.input}
        />

        <label htmlFor='descricao'>Descrição:</label>
        <input
          type='text'
          id='descricao'
          placeholder='Descrição do marcador'
          onChange={handleChange}
          className={styles.input}
        />

        <button type='submit' className={styles.button_addMarker}>
          Adicionar Marcador
        </button>
      </form>
    </aside>
  );
};

export default AddMarkerForm;
