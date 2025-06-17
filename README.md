# 🌍 Mapa Interativo - Front-end

Este é o front-end do projeto **Mapa Interativo**, uma aplicação React que consome a API de marcadores e exibe os pontos geográficos em um mapa do Google Maps.

## 🧰 Tecnologias Utilizadas
- ⚛️ React
- 📦 Zustand (Gerenciamento de estado)
- 🗺️ @react-google-maps/api (Integração com Google Maps)
- 🎨 CSS Modules

## ✅ Pré-requisitos
Antes de iniciar, você precisa ter:
- Node.js instalado ([Baixe aqui](https://nodejs.org/pt))
- A chave da API do Google Maps
- A API de backend rodando (consulte o README do backend)

## 📁 Acessando o Diretório do Projeto
Abra o terminal e entre na pasta do front-end:
```sh
cd frontend
```

## 🔑 Configurando a API Key do Google Maps
1. Crie um arquivo `.env` na raiz do projeto (fora da pasta `src`).
2. Adicione a variável abaixo:
```env
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_AQUI
```
⚠️ **Atenção:** variáveis de ambiente no React com `create-react-app` devem começar com `REACT_APP_`.

## 📦 Instalando Dependências
Instale os pacotes necessários com o npm ou yarn:
```sh
npm install
```

## ▶️ Iniciando o Projeto
Execute a aplicação:
```sh
npm start
```
O front-end estará disponível em:
👉 `http://localhost:3000`

## 🌐 Comunicação com a API
O front-end faz requisições para a API via `fetch`. Certifique-se de que a API está acessível no endereço correto `http://127.0.0.1:8000`.
