+--------------------+       +--------------------+       +--------------------+
|   Frontend (React) | <---> | Backend (Node.js)  | <---> | PostgreSQL Database|
+--------------------+       +--------------------+       +--------------------+
        ^                           |
        |                           |
        |                       +-----------+
        |                       | GROQ API  |
        |                       +-----------+
        |
   Docker Container
        |
        +--> Runs on AWS EC2 via Docker Compose
        |
   Scheduled Job:
   - node-cron runs daily at 3:00 AM
   - Triggers automatic blog generation
