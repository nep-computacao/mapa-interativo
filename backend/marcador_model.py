from sqlalchemy import Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from database import Base

class Marcador(Base):
    __tablename__ = "marcadores"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    titulo: Mapped[str] = mapped_column(String, index=True)
    descricao: Mapped[str] = mapped_column(String, index=True)
    latitude: Mapped[float] = mapped_column(Float, index=True)
    longitude: Mapped[float] = mapped_column(Float, index=True)

    