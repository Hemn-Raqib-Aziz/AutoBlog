# Frontend

React frontend (Vite) for the Auto-Generated Blog Platform.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Docker: Uses the Dockerfile in the front-end folder to build the production image.

## Environment Variables

Create a `.env` file based on `.env.example` with the following:

```
VITE_API_BASE_URL=http://localhost:4000/api/auto-generated-blogs
```