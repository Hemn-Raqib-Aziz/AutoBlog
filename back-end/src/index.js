import express from 'express';
import { blogsRouter } from './routes/blogs.router.js';
import { startServer } from './startServer.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api/auto-generated-blogs', blogsRouter);

// Start server
startServer(app);
