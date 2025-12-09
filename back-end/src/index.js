import express from 'express';
import { blogsRouter } from './routes/blogs.router.js';
import { startServer } from './startServer.js';
import { setupCors } from './config/cors.js';

const app = express();
app.use(express.json());

setupCors(app);

// Routes
app.use('/api/auto-generated-blogs', blogsRouter);

// Start server
startServer(app);
