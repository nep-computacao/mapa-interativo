from pydantic import BaseModel
from typing import Optional

class MarcadorBase(BaseModel):
    titulo: str
    descricao: Optional[str] = None
    latitude: float
    longitude: float

class MarcadorCreate(MarcadorBase):
    pass

class MarcadorUpdate(MarcadorBase):
    id: int
    titulo: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None

class MarcadorDB(MarcadorBase):
    id: int

    class Config:
        from_attributes = True