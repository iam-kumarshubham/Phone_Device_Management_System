import { useState } from "react";
import { DeviceIn, Device } from "../types/device";
import { createDevice, updateDevice } from "../api/devices";

interface Props {
    onAddDevice: (device: Device) => void;
    onUpdateDevice: (device: Device) => void;
}

export const DeviceForm: React.FC<Props> = ({ onAddDevice, onUpdateDevice }) => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState<number | string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const device: DeviceIn = { brand, model, price: Number(price) };

        try {
            if (price === "") {
                alert("Price cannot be empty");
                return;
            }

            if (device.brand && device.model && device.price > 0) {
                const newDevice = await createDevice(device);
                onAddDevice(newDevice);
                resetForm();
            } else {
                alert("Please fill in all fields correctly.");
            }
        } catch (error) {
            console.error("Error creating device:", error);
        }
    };

    const resetForm = () => {
        setBrand("");
        setModel("");
        setPrice("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Add Device
                </button>
            </div>
        </form>
    );
}