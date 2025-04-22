# MAPA INTERATIVO

## 1. Sobre o Projeto
Este projeto foi desenvolvido para o **Núcleo de Extensão e Práticas (NEP)** no contexto do **Projeto MAPAS** da Universidade de Fortaleza. O objetivo é criar uma aplicação interativa que utilize a API do Google Maps como forma de avaliação no NEP.

## 2. Tecnologias Utilizadas
- **React.js, Node.js, Javascript, JSX** para a construção da interface
- **Google Maps API** para a exibição do mapa e manipulação dos pontos
- **CSS** para estilização

## 3. Funcionalidades
- Exibir um mapa centrado no campus da **Universidade de Fortaleza**.
- Permitir que o usuário adicione marcadores no mapa de duas formas:
  - **Clicando no mapa**
  - **Inserindo manualmente a latitude, longitude e nome do ponto**
- Listar os marcadores adicionados com informações de nome e coordenadas.
- Centralizar o mapa ao clicar em um marcador na lista.

## 4. Estrutura do Código
### `MapComponent.js`
Este arquivo contém a lógica principal do projeto.

#### **Principais Estados (useState)**
- `markers`: Armazena os marcadores adicionados pelo usuário.
- `newMarker`: Guarda os dados do novo marcador antes de ser adicionado.
- `mapRef`: Referência para o mapa, permitindo movimentá-lo.
- `center`: Define o centro atual do mapa.

#### **Efeitos (useEffect)**
- Inicializa o primeiro marcador com a localização padrão no campus da Unifor.

#### **Principais Funções**
- `handleClick(event)`: Adiciona um marcador na posição clicada no mapa.
- `handleAddMarker()`: Adiciona um marcador manualmente a partir dos inputs de latitude e longitude.
- `handleMarkerClick(lat, lng)`: Centraliza o mapa no marcador clicado na lista.

## 5. Data de Entrega
- **Apresentação e entrega final:** 25/02/2025

