import { Device, DeviceIn } from "../types/device";

const API_BASE_URL = "http://localhost:8000/api/devices";

export const fetchDevices = async (): Promise<Device[]> => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }
  return response.json();
};

export const createDevice = async (device: DeviceIn): Promise<Device> => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });
  if (!response.ok) {
    throw new Error("Failed to create device");
  }
  return response.json();
};

export const updateDevice = async (id: number, device: DeviceIn): Promise<Device> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });
  if (!response.ok) {
    throw new Error("Failed to update device");
  }
  return response.json();
};

export const deleteDevice = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete device");
  }
};