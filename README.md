# Phone Device Management System

A comprehensive solution for managing phone devices, including both frontend and backend components.

## Project Structure

```
Device_Management_System/
├── phone-device-backend/   # Backend server code
└── phone-device-frontend/  # Frontend React application
```

## Features

- **Device Management**: Track and manage phone devices
- **User Interface**: Modern and responsive web interface
- **RESTful API**: Backend services for device operations

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (or your preferred database)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Device_Management_System
   ```

2. **Backend Setup**
   ```bash
   cd phone-device-backend
   npm install
   # Configure environment variables
   cp .env.example .env
   # Start the backend server
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd ../phone-device-frontend
   npm install
   # Start the development server
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Environment Variables

### Backend
Create a `.env` file in the `phone-device-backend` directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Available Scripts

### Backend
- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests

### Frontend
- `npm start`: Start the development server
- `npm test`: Launch the test runner
- `npm run build`: Build for production

