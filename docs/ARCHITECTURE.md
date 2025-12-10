# System Architecture

This project consists of two main services:

## 1. Backend (Node.js + Express)
- REST API
- PostgreSQL database
- Blog generation cron job
- AI-powered article generator

## 2. Frontend (React + Vite)
- Fetches articles from backend
- Displays list page + single article page
- Responsive UI

## 3. Infrastructure
- Docker Compose for local development
- AWS CodeBuild + EC2 deployment
- Infrastructure scripts for server bootstrap
