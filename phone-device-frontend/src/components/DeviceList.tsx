import { useState, useEffect } from "react";
import { Device } from "../types/device";
import { fetchDevices, deleteDevice } from "../api/devices";
import { DeviceForm } from "./DeviceForm";

interface Props {
    refresh: boolean;
    onDeviceDeleted: (id: number) => void;
}

export const DeviceList: React.FC<Props> = ({ refresh, onDeviceDeleted }) => {
    const [devices, setDevices] = useState<Device[]>([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadDevices = async () => {
            try {
                const fetchedDevices = await fetchDevices();
                setDevices(fetchedDevices);
            } catch (error) {
                console.error("Error fetching devices:", error);
            }
        };

        loadDevices();
    }, [refresh]);

    const handleDelete = async (id: number) => {
        try {
            await deleteDevice(id);
            setDevices(devices.filter(device => device.id !== id));
            onDeviceDeleted(id);
        } catch (error) {
            console.error("Error deleting device:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Device List</h2>
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                             transition-colors"
                >
                    {showAddForm ? 'Hide Form' : 'Add New Device'}
                </button>
            </div>

            {showAddForm && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <DeviceForm
                        onAddDevice={(device) => {
                            setDevices([...devices, device]);
                            setShowAddForm(false);
                        }}
                        onUpdateDevice={() => {}}
                    />
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devices.map(device => (
                    <div 
                        key={device.id} 
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {device.brand} {device.model}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Price: ${device.price.toLocaleString()}
                        </p>
                        <button 
                            onClick={() => handleDelete(device.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 
                                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                                     transition-colors"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}