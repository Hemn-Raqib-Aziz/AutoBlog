import express from 'express';
import BlogsController from '../controllers/blogs.controller.js';

export const blogsRouter = express.Router();


blogsRouter.get('/all', BlogsController.allBlogs);
blogsRouter.get('/:id', BlogsController.findBlogById);
