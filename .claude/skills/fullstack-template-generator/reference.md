# Technical Reference

## Architecture Overview

This fullstack template uses a modern, production-ready architecture with clear separation between backend API and frontend client.

## Backend Stack

### Core Framework
- **FastAPI** 0.123.4 - Modern Python web framework
  - Async/await support for high performance
  - Auto-generated API documentation (Swagger UI at `/docs`)
  - Type checking with Pydantic
  - Fast development with auto-reload

### Key Dependencies
- **Python** 3.8+ required
- **Uvicorn** 0.38.0 - ASGI server
- **Pydantic** 2.12.5 - Data validation
- **OpenAI** 2.8.1 - ChatGPT API client
- **python-dotenv** 1.2.1 - Environment management

### Backend Architecture

**File: `backend/main.py`**
```python
# Key Components:
- FastAPI app initialization
- CORS middleware for cross-origin requests
- OpenAI client initialization
- Pydantic models (ChatRequest)
- Three API endpoints: /, /test, /chat
- Comprehensive error handling
```

**API Endpoints:**

1. `GET /` - Root endpoint
   - Returns: `{"message": "...", "status": "healthy"}`
   - Purpose: Health check

2. `GET /test` - Test endpoint
   - Returns: `{"status": "success", "message": "..."}`
   - Purpose: Verify backend connectivity

3. `POST /chat` - ChatGPT integration
   - Request: `{"message": str, "model": str}`
   - Returns: `{"status": "success", "response": str, "model": str, "usage": {...}}`
   - Validates: message length (max 10,000 chars)
   - Error handling: API key, rate limits, model validation

**Environment Variables:**
- `OPENAI_API_KEY` (required) - OpenAI API authentication

**Error Handling:**
- 400: Bad request (empty/long messages, invalid model)
- 401: Invalid API key
- 429: Rate limit exceeded
- 500: General server errors

## Frontend Stack

### Core Framework
- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
  - Hot Module Replacement (HMR)
  - Fast cold starts
  - Optimized production builds

### Key Dependencies
- **Axios** 1.13.2 - HTTP client for API calls
- **ESLint** - Code quality and linting

### Frontend Architecture

**File: `frontend/src/App.jsx`**
```javascript
// Key Components:
- React hooks (useState) for state management
- Axios API calls to backend
- Test endpoint functionality
- Chat interface with OpenAI integration
- Error handling and loading states
- Responsive UI components
```

**State Management:**
```javascript
- message: Current chat input
- chatResponse: AI response text
- testResponse: Test endpoint results
- loading: Request state
- error: Error messages
```

**API Integration:**
- Base URL: `http://localhost:8000`
- GET `/test` - Test connectivity
- POST `/chat` - Send messages to OpenAI

**UI Components:**
- Test section with button
- Chat section with input and send button
- Response display boxes
- Error display

**File: `frontend/src/App.css`**
- Modern, clean styling
- Responsive layout (max-width: 800px)
- Button states (hover, disabled)
- Input focus styling
- Response and error boxes

## Configuration

### Backend Configuration

**`.env` file:**
```env
OPENAI_API_KEY=your_api_key_here
```

**CORS Settings:**
```python
allow_origins=["http://localhost:5173"]  # Vite default port
allow_credentials=True
allow_methods=["*"]
allow_headers=["*"]
```

### Frontend Configuration

**`vite.config.js`:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Default ports:**
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:5173`

## Project Structure Details

### Backend Structure
```
backend/
├── main.py              # FastAPI application (110 lines)
├── requirements.txt     # Python dependencies
├── .env.example         # Environment template
├── .gitignore          # Excludes: venv/, .env, __pycache__/
└── tests/              # Test directory
    └── __init__.py
```

### Frontend Structure
```
frontend/
├── src/
│   ├── App.jsx         # Main component (101 lines)
│   ├── App.css         # Component styles (99 lines)
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # Linting rules
└── .gitignore          # Excludes: node_modules/, dist/
```

## Development Workflow

### Backend Development
1. Activate virtual environment
2. Run: `python -m uvicorn main:app --reload`
3. Auto-reload on file changes
4. Access Swagger docs at: `http://localhost:8000/docs`

### Frontend Development
1. Install dependencies: `npm install`
2. Run: `npm run dev`
3. Hot Module Replacement active
4. Build for production: `npm run build`

## Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Store in environment variables only
3. **CORS**: Configured for localhost (update for production)
4. **Input Validation**: Message length limits, empty message checks
5. **Error Messages**: Sanitized to avoid exposing sensitive info

## Deployment Considerations

### Backend Deployment
- Use Gunicorn with Uvicorn workers
- Set production environment variables
- Configure reverse proxy (nginx)
- Implement rate limiting
- Add authentication/authorization

### Frontend Deployment
- Build: `npm run build`
- Deploy `dist/` folder to:
  - Vercel
  - Netlify
  - AWS S3 + CloudFront
  - Any static hosting

## Testing

### Backend Testing
- Framework: pytest (add to requirements.txt)
- Test directory ready in `backend/tests/`

### Frontend Testing
- Can add: Vitest, React Testing Library
- Test directory can be created in `frontend/src/tests/`

## Scalability

### Backend Scaling Options
- Modular structure: Split into api/, models/, services/
- Database integration: Add SQLAlchemy
- Authentication: Add JWT/OAuth
- Background tasks: Add Celery

### Frontend Scaling Options
- State management: Add Redux/Zustand
- Routing: Add React Router
- Component library: Add Material-UI/Chakra
- API client: Centralize axios instance

## Performance

### Backend
- Async/await for non-blocking I/O
- FastAPI performance: 20k+ req/sec
- Uvicorn ASGI server optimized

### Frontend
- Vite for fast HMR
- Code splitting supported
- React 19 performance improvements
- Lazy loading ready
