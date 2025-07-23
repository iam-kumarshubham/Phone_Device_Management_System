from fastapi import APIRouter, HTTPException, status
from typing import List
from schemas.device import DeviceIn, Device
from services.device_service import DeviceService

router = APIRouter()

def get_device_service() -> DeviceService:
    return DeviceService()

@router.post("/devices/", response_model=Device, status_code=status.HTTP_201_CREATED)
def add_device(device_in: DeviceIn):
    device_service = get_device_service()
    device = device_service.add_device(device_in)
    return device
    
@router.get("/devices/{device_id}", response_model=Device)
def get_device(device_id: int):
    device_service = get_device_service()
    device = device_service.get_device(device_id)
    if not device:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Device not found")
    return device

@router.get("/devices/", response_model=List[Device])
def get_all_devices():
    device_service = get_device_service()
    devices = device_service.get_all_devices()
    return devices

@router.delete("/devices/{device_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_device(device_id: int):
    device_service = get_device_service()
    if not device_service.delete_device(device_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Device not found")

@router.put("/devices/{device_id}", response_model=Device)
def update_device(device_id: int, device_in: DeviceIn):
    device_service = get_device_service()
    updated_device = device_service.update_device(device_id, device_in)
    if not updated_device:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Device not found")
    return updated_device
