# Usage Examples

## Example 1: Basic Project Generation

**User Request:**
```
"I need to create a new fullstack project with Python backend and React frontend"
```

**Claude Response:**
1. Identifies the need for fullstack-template-generator skill
2. Asks for project name and directory
3. Generates complete project structure
4. Provides setup instructions

**Expected Output:**
```
Creating fullstack project structure...

✓ Created backend/ with FastAPI application
✓ Created frontend/ with React + Vite
✓ Added comprehensive README.md
✓ Configured CORS and API integration

Project created successfully at: ./my-project/

Next steps:
1. cd my-project/backend && create .env file with OPENAI_API_KEY
2. pip install -r requirements.txt
3. python -m uvicorn main:app --reload

In new terminal:
4. cd my-project/frontend && npm install
5. npm run dev
```

## Example 2: E-commerce Project

**User Request:**
```
"Generate a fullstack template for my e-commerce project"
```

**Claude Response:**
- Generates template with name "ecommerce-app"
- All files created with working backend and frontend
- Suggests next steps for adding e-commerce features

## Example 3: Chat Application

**User Request:**
```
"I want to build a chat app with AI integration, can you set up the project?"
```

**Claude Response:**
- Recognizes need for OpenAI integration (already in template)
- Generates project
- Highlights the existing /chat endpoint
- Explains how the ChatGPT integration works

## Example 4: Specific Directory

**User Request:**
```
"Create a fullstack project in C:/Users/Projects/my-new-app"
```

**Claude Response:**
- Creates project in specified directory
- Full structure generated
- Setup instructions provided

## Example 5: Quick Prototype

**User Request:**
```
"I need to quickly prototype a web app with API backend"
```

**Claude Response:**
- Generates template
- Emphasizes fast setup with Vite HMR
- Points out the test endpoint for quick validation

## Common Use Cases

### 1. Starting a New Project
When beginning any new fullstack web application that needs:
- Python REST API
- Modern React UI
- Quick development setup

### 2. Learning Projects
For developers learning:
- FastAPI framework
- React with Vite
- Full-stack development
- OpenAI API integration

### 3. Hackathons
Quick project bootstrap for:
- Time-constrained development
- Rapid prototyping
- Working baseline to build upon

### 4. MVP Development
Building minimum viable products:
- Pre-configured backend and frontend
- OpenAI integration ready
- Production-ready structure

### 5. API + UI Projects
Any project requiring:
- RESTful API backend
- Interactive web frontend
- Real-time communication

## What Claude Should Do

### Step 1: Confirm Project Details
```
"I'll create a fullstack template for you. What would you like to name your project?"
```

### Step 2: Create Directory Structure
- Ask for target directory if not specified
- Create all necessary folders
- Copy template files

### Step 3: Customize (Optional)
- Update project name in package.json if requested
- Modify README with project-specific details

### Step 4: Provide Instructions
- Backend setup steps
- Frontend setup steps
- How to run both servers
- Next steps for development

## Expected User Follow-Up Questions

### "How do I add a database?"
- Suggest SQLAlchemy for FastAPI
- Provide example integration

### "Can I use TypeScript instead?"
- Explain how to convert React JSX to TSX
- Update vite config if needed

### "How do I deploy this?"
- Reference README deployment section
- Suggest hosting options

### "Where do I add new API endpoints?"
- Point to backend/main.py
- Show example of adding new route

### "How do I add more React components?"
- Point to frontend/src/components/ directory
- Show component creation pattern

## Troubleshooting Examples

### Issue: "Backend won't start"
**Solution:**
- Check if .env file exists with OPENAI_API_KEY
- Verify virtual environment is activated
- Check if port 8000 is available

### Issue: "Frontend can't connect to backend"
**Solution:**
- Verify backend is running at localhost:8000
- Check CORS configuration
- Verify API_URL in App.jsx

### Issue: "OpenAI API errors"
**Solution:**
- Verify API key is valid
- Check for rate limits
- Ensure model name is correct

## Files That Will Be Created

### Root Level
- README.md (comprehensive documentation)

### Backend Files (7 files)
- main.py (FastAPI application)
- requirements.txt (dependencies)
- .env.example (template)
- .gitignore
- tests/__init__.py

### Frontend Files (10+ files)
- index.html
- package.json
- vite.config.js
- eslint.config.js
- .gitignore
- src/App.jsx
- src/App.css
- src/main.jsx
- src/index.css
- Empty directories: components/, hooks/, pages/, styles/

## Time Estimate
- Skill execution: < 1 minute
- Backend setup: 2-3 minutes
- Frontend setup: 1-2 minutes
- **Total time to running app: ~5 minutes**

## Success Indicators

After generation, user should be able to:
1. ✓ Run backend and see Swagger docs
2. ✓ Run frontend and see chat UI
3. ✓ Test /test endpoint successfully
4. ✓ Send chat message and get OpenAI response
5. ✓ Have complete documentation in README
