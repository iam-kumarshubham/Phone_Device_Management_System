# Phone Device Management System

A comprehensive solution for managing phone devices, built with FastAPI backend and React frontend.

## Project Structure

```
Device_Management_System/
├── phone-device-backend/   # FastAPI backend server
└── phone-device-frontend/  # React frontend application
```

## Features

- **Device Management**: Track and manage phone devices with CRUD operations
- **FastAPI Backend**: High-performance RESTful API with automatic documentation
- **Modern Frontend**: Responsive React interface with state management
- **JWT Authentication**: Secure user authentication system

## Prerequisites

### Backend
- Python 3.8+
- pip
- PostgreSQL/MySQL/MongoDB (or your preferred database)

### Frontend
- Node.js (v16 or later)
- npm or yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Device_Management_System
   ```

2. **Backend Setup**
   ```bash
   cd phone-device-backend
   # Create and activate virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Configure environment variables
   cp .env.example .env
   # Edit .env with your configuration
   
   # Run database migrations (if any)
   alembic upgrade head
   
   # Start the FastAPI server
   uvicorn main:app --reload
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
   - Backend API: http://localhost:8000

## Environment Variables

### Backend
Create a `.env` file in the `phone-device-backend` directory with the following variables:

```
# Server
APP_ENV=development
APP_HOST=0.0.0.0
APP_PORT=8000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/device_management
# or for SQLite
# DATABASE_URL=sqlite:///./device_management.db

# Security
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# CORS
FRONTEND_URL=http://localhost:3000
```

## Available Scripts

### Backend
- `uvicorn main:app --reload`: Start the development server with auto-reload
- `pytest`: Run tests
- `alembic upgrade head`: Run database migrations
- `black .`: Format code with Black
- `isort .`: Sort imports

### Frontend
- `npm start`: Start the development server
- `npm test`: Launch the test runner
- `npm run build`: Build for production

