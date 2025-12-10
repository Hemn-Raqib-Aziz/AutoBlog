import { createDatabaseIfNotExists } from './config/initDB.js';
import { createBlogsTable } from './models/blogs.model.js';
import { seedBlogs } from './seeds/blogs.seed.js';
import { startArticleCron } from './services/articleJob.js';
import './config/config.js'

export const startServer = async (app) => {
  try {
    await createDatabaseIfNotExists();
    console.log('Database connected successfully');

    await createBlogsTable();
    console.log('Blogs table ready');

    await seedBlogs();
    startArticleCron();


    app.listen(process.env.PORT, () => {
      console.log(`App running on port ${process.env.PORT}`);
    });

  } catch (err) {
    console.error('Database connection failed', err.stack);
    process.exit(1);
  }
};
