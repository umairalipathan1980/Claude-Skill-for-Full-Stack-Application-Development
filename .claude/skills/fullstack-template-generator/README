# FastAPI + React Full-Stack Template

A modern full-stack web application template with FastAPI backend and React (Vite) frontend, featuring OpenAI ChatGPT integration.

## Features

- **Backend (FastAPI)**
  - RESTful API with FastAPI
  - OpenAI ChatGPT integration
  - CORS configuration for frontend communication
  - Comprehensive error handling and validation
  - Environment-based configuration
  - Auto-generated API documentation (Swagger UI)

- **Frontend (React + Vite)**
  - Modern React 19 with Vite for fast development
  - Axios for API communication
  - Clean and responsive UI
  - Real-time chat interface
  - Error handling and loading states

## Tech Stack

### Backend
- **Framework:** FastAPI 0.123.4
- **Language:** Python 3.8+
- **API Client:** OpenAI 2.8.1
- **Server:** Uvicorn
- **Environment:** python-dotenv

### Frontend
- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **HTTP Client:** Axios 1.13.2
- **Language:** JavaScript (ES6+)

## Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd fullstack-template
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy .env.example to .env
copy .env.example .env  # Windows
# cp .env.example .env  # macOS/Linux

# Edit .env and add your OpenAI API key
# OPENAI_API_KEY=your_api_key_here
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

## Configuration

### Backend Configuration

Edit `backend/.env` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Frontend Configuration

The frontend is configured to connect to `http://localhost:8000` by default. If your backend runs on a different port, update the `API_URL` in `frontend/src/App.jsx`:

```javascript
const API_URL = 'http://localhost:8000'
```

## Running the Application

### Start the Backend

```bash
cd backend

# Make sure virtual environment is activated
# Then run:
python -m uvicorn main:app --reload

# Or simply:
python main.py
```

The backend will start at: `http://localhost:8000`

API Documentation available at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Start the Frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start at: `http://localhost:5173`

## API Endpoints

### GET `/`
Root endpoint to check API health
```json
{
  "message": "FastAPI Backend is running",
  "status": "healthy"
}
```

### GET `/test`
Test endpoint to verify connectivity
```json
{
  "status": "success",
  "message": "Test endpoint is working!"
}
```

### POST `/chat`
Send a message to OpenAI's ChatGPT

**Request Body:**
```json
{
  "message": "What is the capital of France?",
  "model": "gpt-4-turbo-preview"
}
```

**Response:**
```json
{
  "status": "success",
  "response": "The capital of France is Paris.",
  "model": "gpt-4-turbo-preview",
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 8,
    "total_tokens": 23
  }
}
```

## Project Structure

```
fullstack-template/
   backend/
      .env                 # Environment variables (not in git)
      .env.example         # Example environment file
      .gitignore          # Backend gitignore
      main.py             # FastAPI application
      requirements.txt    # Python dependencies
      tests/              # Backend tests

   frontend/
      public/             # Static assets
      src/
         App.jsx        # Main React component
         App.css        # Component styles
         main.jsx       # React entry point
         index.css      # Global styles
      .gitignore         # Frontend gitignore
      index.html         # HTML template
      package.json       # Node dependencies
      vite.config.js     # Vite configuration

   README.md              # This file
```

## Development

### Backend Development

The backend uses FastAPI's auto-reload feature. Any changes to Python files will automatically restart the server.

To run tests:
```bash
cd backend
pytest
```

### Frontend Development

Vite provides Hot Module Replacement (HMR). Changes to React components will update instantly without page reload.

Build for production:
```bash
cd frontend
npm run build
```

Preview production build:
```bash
npm run preview
```

## Troubleshooting

### Backend Issues

**Error: "OPENAI_API_KEY not found"**
- Make sure you've created a `.env` file in the backend directory
- Verify your API key is correctly set: `OPENAI_API_KEY=sk-...`

**Error: "Attribute 'app' not found in module 'app'"**
- Make sure you're running `uvicorn main:app` (not `app:app`)
- Check that `main.py` exists in the backend directory

**CORS Errors**
- Verify the backend CORS settings include your frontend URL
- Default is `http://localhost:5173`

### Frontend Issues

**Error: "Network Error" or "Connection Refused"**
- Make sure the backend is running at `http://localhost:8000`
- Check that the `API_URL` in `App.jsx` matches your backend URL

**Empty page or blank screen**
- Check browser console for errors
- Verify `index.html` exists and contains `<div id="root"></div>`
- Make sure all dependencies are installed: `npm install`

## Security Notes

- **Never commit `.env` files** to version control
- **Rotate API keys regularly**
- Use environment variables for all sensitive data
- Implement rate limiting in production
- Add authentication/authorization for production use

## Deployment

### Backend Deployment

For production deployment, consider:
- Using Gunicorn with Uvicorn workers
- Setting up proper environment variables
- Implementing rate limiting
- Adding logging and monitoring
- Using a reverse proxy (nginx)

Example production command:
```bash
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

### Frontend Deployment

Build the frontend:
```bash
npm run build
```

Deploy the `dist/` folder to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) - Modern Python web framework
- [React](https://react.dev/) - JavaScript library for building UIs
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [OpenAI](https://openai.com/) - AI models and APIs

## Support

For issues and questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review FastAPI docs: https://fastapi.tiangolo.com/
- Review React docs: https://react.dev/

---

**Happy Coding!**
