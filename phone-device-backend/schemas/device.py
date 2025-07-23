from pydantic import BaseModel, Field
from typing import Optional

class DeviceIn(BaseModel):
    brand: str = Field(..., max_length=50, min_length=1)
    model: str = Field(..., max_length=50, min_length=1)
    price: float = Field(..., gt=0)

class Device(DeviceIn):
    id: int