# Infra / Docker Setup

This folder contains the Docker Compose setup and deployment scripts for the Auto-Generated Blog Platform.

## Run Locally

1. Copy the example environment files:

   - Backend:
     ```bash
     cp ../back-end/src/.env.example ../back-end/src/.env
     ```
     Fill in the backend credentials (database, API keys, etc.).

   - Frontend:
     ```bash
     cp ../front-end/.env.example ../front-end/.env
     ```
     Fill in frontend environment variables (API base URL, etc.).

2. Build and start all services:
   ```bash
   docker-compose up --build
   ```

3. Services will run on:
   * Frontend: http://localhost:5173
   * Backend: http://localhost:4000
   * Database: inside Docker network as `db`

## Notes

* `scripts/deploy.sh`: Deploy the app to a server.
* `scripts/init-ec2.sh`: Initialize a new EC2 server (install Docker, setup folders, etc.).
* `buildspec.yml`: AWS CodeBuild configuration for automated build and deployment.