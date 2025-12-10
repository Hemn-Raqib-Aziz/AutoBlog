# Backend

Node.js + Express backend for the Auto-Generated Blog Platform.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   node/nodemon src/index.js
   ```

3. Docker: Uses the Dockerfile in the back-end folder to build the image.

## Environment Variables

Create a `.env` file based on `.env.example` with at least:

```
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_PORT=5432
DB_NAME=blogs
INIT_DB_NAME=postgres
GROQ_API_KEY=your_groq_api_key
PORT=4000
```