from typing import Optional,List
from schemas.device import DeviceIn, Device

class DeviceService:
    def __init__(self):
        self.devices: List[Device] = []
        self.next_id = 1
    
    def add_device(self, device_in: DeviceIn) -> Device:
        device = Device(id=self.next_id, **device_in.dict())
        self.devices.append(device)
        self.next_id += 1
        return device
    
    def get_device(self, device_id: int) -> Optional[Device]:
        for device in self.devices:
            if device.id == device_id:
                return device
        return None
    
    def get_all_devices(self) -> List[Device]:
        return self.devices
    
    def delete_device(self, device_id: int) -> bool:
        for i, device in enumerate(self.devices):
            if device.id == device_id:
                del self.devices[i]
                return True
        return False
    
    def update_device(self, device_id: int, device_in: DeviceIn) -> Optional[Device]:
        for i, device in enumerate(self.devices):
            if device.id == device_id:
                updated_device = Device(id=device_id, **device_in.dict())
                self.devices[i] = updated_device
                return updated_device
        return None