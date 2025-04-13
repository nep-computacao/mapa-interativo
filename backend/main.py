from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from marcador_model import Marcador
from marcador_schema import MarcadorCreate, MarcadorUpdate, MarcadorDB
from database import get_db

app = FastAPI()

# Defina a origem do frontend, por exemplo, 127.0.0.1:5500
origins = [
    "*",  # Substitua com a URL do seu frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à API de Marcadores da Unifor"}


@app.post("/marcadores", response_model=MarcadorDB)
def criar_marcador(marcador: MarcadorCreate, db: Session = Depends(get_db)):
    novo_marcador = Marcador(**marcador.model_dump())
    db.add(novo_marcador)
    db.commit()
    db.refresh(novo_marcador)
    return novo_marcador


@app.get("/marcadores", response_model=list[MarcadorDB])
def ler_marcadores(db: Session = Depends(get_db)):
    return db.query(Marcador).all()


@app.put("/marcadores/{marcador_id}", response_model=MarcadorDB)
def atualizar_marcador(marcador_id: int, marcador: MarcadorUpdate, db: Session = Depends(get_db)):
    marcador_db = db.query(Marcador).filter(Marcador.id == marcador_id).first()

    if not marcador_db:
        raise HTTPException(status_code=404, detail="Marcador não encontrado")

    marcador_db.titulo = marcador.titulo
    marcador_db.descricao = marcador.descricao
    marcador_db.latitude = marcador.latitude
    marcador_db.longitude = marcador.longitude

    db.commit()
    db.refresh(marcador_db)
    return marcador_db


@app.delete("/marcadores/{marcador_id}")
def deletar_marcador(marcador_id: int, db: Session = Depends(get_db)):
    marcador = db.query(Marcador).filter(Marcador.id == marcador_id).first()

    if not marcador:
        raise HTTPException(status_code=404, detail="Marcador não encontrado")

    db.delete(marcador)
    db.commit()
    return {"message": "Marcador deletado com sucesso"}