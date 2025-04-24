# 🗺️ API de Marcadores
Esta API permite gerenciar marcadores geográficos, oferecendo endpoints para criar, atualizar, listar e deletar marcadores.

## ✅ Pré-requisitos
Antes de começar, certifique-se de que você possui o Python instalado em sua máquina.

## 📁 Acessando o Diretório do Projeto Backend
Abra o terminal e navegue até a pasta do `backend`:
```sh
cd backend
```

## 🧪 Criando e Ativando o Ambiente Virtual
Crie um ambiente virtual para isolar as dependências do projeto:
```sh
python -m venv venv
```
Ative o ambiente:
- **Windows:**
  ```sh
  venv\Scripts\activate
  ```
- **Linux/macOS:**
  ```sh
  source venv/bin/activate
  ```

## 📦 Instalando Dependências
Instale os pacotes necessários:
```sh
pip install -r requirements.txt
```

## ▶️ Executando a Aplicação
Execute a API com:
```sh
uvicorn main:app --reload
```
Ou, se desejar especificar host e porta:
```sh
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
A aplicação estará disponível em:
👉 `http://127.0.0.1:8000/`

## 📚 Documentação da API
A documentação interativa (Swagger UI) estará disponível em:
👉 `http://127.0.0.1:8000/docs`

## 🌐 Configurando CORS
Se o front-end estiver hospedado em um domínio diferente, configure o CORS da seguinte forma:
1. Instale o pacote com suporte completo ao FastAPI:
   ```sh
   pip install fastapi[all]
   ```

2. No arquivo `main.py`, adicione o seguinte:
   ```python
   from fastapi import FastAPI
   from fastapi.middleware.cors import CORSMiddleware

   app = FastAPI()

   app.add_middleware(
       CORSMiddleware,
       allow_origins=["*"],  # Altere para um domínio específico, se necessário
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

✅ Para maior segurança, substitua `"*"` por `"http://localhost:3000"` ou outro domínio específico do front-end.

