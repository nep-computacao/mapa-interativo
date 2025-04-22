# API de Marcadores

Esta API permite gerenciar marcadores, fornecendo endpoints para criar, atualizar, listar e deletar marcadores.

## Pre-requisitos

Você deve ter o Python instalado no seu computador.

## Abrindo projeto

Abra o terminal e entre na pasta `backend`:

```sh
cd backend
```

## Criando um Ambiente Virtual

Crie um ambiente virtual para isolar as dependências do projeto:

```sh
python -m venv venv
```

Ative o ambiente virtual:

- **Windows:**
  ```sh
  venv\Scripts\activate
  ```
- **Linux/macOS:**
  ```sh
  source venv/bin/activate
  ```

## Instalando Dependências

Instale as dependências necessárias para rodar a API:

```sh
pip install -r requirements.txt
```

## Executando a Aplicação

Após configurar o ambiente, execute a API com o seguinte comando:

```sh
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
ou 

```sh
uvicorn main:app --reload
```

A API estará rodando em `http://127.0.0.1:8000/` (por padrão).

## Documentação da API

A documentaçãoda API estará rodando por padrão em `http://127.0.0.1:8000/docs`

## Configurando o CORS

Se o front-end estiver rodando em um domínio diferente, será necessário configurar o CORS. Para isso, edite o código da API e adicione a biblioteca `fastapi.middleware.cors`:

1. Instale o pacote:

   ```sh
   pip install fastapi[all]
   ```

2. No seu arquivo principal (ex: `main.py`), importe e configure o CORS:

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

Se precisar restringir o acesso a um domínio específico, altere a configuração:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Substitua pela URL do seu front-end
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Agora, a API estará pronta para receber requisições do seu front-end sem problemas de CORS.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias no projeto.