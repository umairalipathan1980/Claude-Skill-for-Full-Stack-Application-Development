# Fullstack Template Generator - High-Level Workflow

## How The Skill Works

```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'18px', 'fontFamily':'arial'}}}%%
graph TB
    START([User Invokes Skill])
    INPUT[Get Project Name<br/>& Target Directory]

    subgraph "Template Generation Process"
        CREATE[Create Directory Structure<br/>backend/ frontend/]

        subgraph "Copy Backend Templates"
            BE_COPY[Copy Backend Files]
            BE_MAIN[main.py.template → main.py<br/>FastAPI + OpenAI Integration]
            BE_CONFIG[requirements.txt<br/>.env.example<br/>.gitignore]
        end

        subgraph "Copy Frontend Templates"
            FE_COPY[Copy Frontend Files]
            FE_REACT[App.jsx.template → App.jsx<br/>React Chat UI]
            FE_SHADCN[shadcn/ui Components<br/>Button, Card, Input, Textarea]
            FE_CONFIG[package.json<br/>vite.config.js<br/>tailwind.config.js]
        end

        CUSTOMIZE[Customize Files<br/>Update project name in package.json]
        README_GEN[Generate README.md<br/>with setup instructions]
    end

    OUTPUT[Output Complete Project]

    subgraph "Generated Project Ready"
        BE_READY[Backend: FastAPI<br/>GET / /test<br/>POST /chat]
        FE_READY[Frontend: React + Vite<br/>Tailwind + shadcn/ui<br/>Chat Interface]
        DOCS[Documentation<br/>Setup & Run Instructions]
    end

    INSTRUCTIONS[Provide Setup Commands<br/>Backend: python -m venv venv<br/>Frontend: npm install]

    DONE([User Has Production-Ready<br/>Fullstack Application])

    START --> INPUT
    INPUT --> CREATE

    CREATE --> BE_COPY
    BE_COPY --> BE_MAIN
    BE_COPY --> BE_CONFIG

    CREATE --> FE_COPY
    FE_COPY --> FE_REACT
    FE_COPY --> FE_SHADCN
    FE_COPY --> FE_CONFIG

    BE_CONFIG --> CUSTOMIZE
    FE_CONFIG --> CUSTOMIZE

    CUSTOMIZE --> README_GEN
    README_GEN --> OUTPUT

    OUTPUT --> BE_READY
    OUTPUT --> FE_READY
    OUTPUT --> DOCS

    BE_READY --> INSTRUCTIONS
    FE_READY --> INSTRUCTIONS
    DOCS --> INSTRUCTIONS

    INSTRUCTIONS --> DONE

    style START fill:#10b981,color:#fff,stroke:#059669,stroke-width:4px,font-size:18px
    style INPUT fill:#3b82f6,color:#fff,stroke:#2563eb,stroke-width:3px,font-size:16px
    style CREATE fill:#f59e0b,color:#000,stroke:#d97706,stroke-width:3px,font-size:16px
    style BE_MAIN fill:#009688,color:#fff,stroke:#00796b,stroke-width:3px,font-size:16px
    style FE_REACT fill:#61dafb,color:#000,stroke:#00a8cc,stroke-width:3px,font-size:16px
    style FE_SHADCN fill:#a855f7,color:#fff,stroke:#7c3aed,stroke-width:3px,font-size:16px
    style BE_READY fill:#009688,color:#fff,stroke:#00796b,stroke-width:3px,font-size:16px
    style FE_READY fill:#61dafb,color:#000,stroke:#00a8cc,stroke-width:3px,font-size:16px
    style DONE fill:#10b981,color:#fff,stroke:#059669,stroke-width:4px,font-size:18px
    style BE_COPY fill:#009688,color:#fff,stroke-width:2px,font-size:15px
    style FE_COPY fill:#61dafb,color:#000,stroke-width:2px,font-size:15px
    style BE_CONFIG fill:#009688,color:#fff,stroke-width:2px,font-size:15px
    style FE_CONFIG fill:#61dafb,color:#000,stroke-width:2px,font-size:15px
    style CUSTOMIZE fill:#8b5cf6,color:#fff,stroke-width:2px,font-size:16px
    style README_GEN fill:#8b5cf6,color:#fff,stroke-width:2px,font-size:16px
    style OUTPUT fill:#f59e0b,color:#000,stroke-width:3px,font-size:16px
    style DOCS fill:#6366f1,color:#fff,stroke-width:2px,font-size:15px
    style INSTRUCTIONS fill:#ec4899,color:#fff,stroke-width:3px,font-size:16px
```

## Key Components

- **Backend Templates**: FastAPI with OpenAI ChatGPT integration, CORS, validation
- **Frontend Templates**: React 19 + Vite 7 + Tailwind CSS 3 + shadcn/ui components
- **Smart Generation**: Removes `.template` suffixes, customizes project names
- **Production-Ready**: Includes all configs, documentation, and setup instructions

## Result

A fully functional fullstack application with:
- ✅ REST API with 3 endpoints (health, test, chat)
- ✅ Modern React UI with chat interface
- ✅ OpenAI integration ready to use
- ✅ All dependencies configured
- ✅ Development and production ready
