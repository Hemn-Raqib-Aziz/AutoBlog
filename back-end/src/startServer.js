import db from './config/db.js';
import { createDatabaseIfNotExists } from './config/initDB.js';
import { createBlogsTable } from './models/blogs.model.js';
import { seedBlogs } from './seeds/blogs.seed.js';
import { startArticleCron } from './services/articleJob.js';

export const startServer = async (app) => {
  try {
    await createDatabaseIfNotExists();
    await db.connect();
    console.log('Database connected successfully');

    await createBlogsTable();
    console.log('Blogs table ready');

    await seedBlogs();
    startArticleCron();


    app.listen(4000, () => {
      console.log('App running on port 4000');
    });

  } catch (err) {
    console.error('Database connection failed', err.stack);
    process.exit(1);
  }
};
