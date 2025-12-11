# System Architecture

```
+--------------------+       +--------------------+       +--------------------+
|   Frontend (React) | <---> | Backend (Node.js)  | <---> | PostgreSQL Database|
+--------------------+       +--------------------+       +--------------------+
                                      |
                                      |
                                      v
                                +-----------+
                                | GROQ API  |
                                +-----------+

========================================================================
                          DEPLOYMENT ARCHITECTURE
========================================================================

┌─────────────────────────────────────────────────────────────────────┐
│                           AWS EC2 Instance                          │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                     Docker Compose                            │ │
│  │                                                               │ │
│  │  ┌─────────────────┐      ┌─────────────────┐               │ │
│  │  │ Frontend        │      │ Backend         │               │ │
│  │  │ Container       │      │ Container       │               │ │
│  │  │ (React)         │      │ (Node.js)       │               │ │
│  │  └─────────────────┘      └─────────────────┘               │ │
│  │                                    │                         │ │
│  │                           ┌────────┴────────┐                │ │
│  │                           │                 │                │ │
│  │                  ┌─────────────────┐ ┌─────────────────┐    │ │
│  │                  │ PostgreSQL      │ │ node-cron       │    │ │
│  │                  │ Container       │ │ Scheduler       │    │ │
│  │                  │                 │ │ (Daily 3:00 AM) │    │ │
│  │                  └─────────────────┘ └─────────────────┘    │ │
│  │                                                               │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Components

### Frontend (React)
- User interface for blog management and viewing
- Communicates with backend via REST API

### Backend (Node.js)
- REST API server
- Business logic and data processing
- Integrates with GROQ API for AI-powered blog generation
- Scheduled task management via node-cron

### PostgreSQL Database
- Persistent data storage
- Stores blog posts, user data, and application state

### GROQ API
- External AI service for content generation
- Called by backend for automated blog post creation

### Scheduled Job
- **Technology**: node-cron
- **Schedule**: Daily at 3:00 AM
- **Function**: Triggers automatic blog generation process

## Deployment

The application runs on AWS EC2 using Docker Compose, with all services containerized for easy deployment and scaling.
