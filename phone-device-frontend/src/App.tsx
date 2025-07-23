import { useState } from "react";
import { DeviceList } from "./components/DeviceList";

function App() {
  const [refresh, setRefresh] = useState(false);
  
  const triggerRefresh = () => {
    setRefresh(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Device Management System
        </h1>

        <DeviceList 
          refresh={refresh} 
          onDeviceDeleted={(id) => {
            console.log("Device deleted:", id);
            triggerRefresh();
          }} 
        />
      </div>
    </div>
  );
}

export default App;