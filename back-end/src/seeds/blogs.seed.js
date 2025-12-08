import db from "../config/db.js";
import { generateRandomBlog } from "../services/aiClient.js";

export const seedBlogs = async (count = 5) => {
  const check = await db.query("SELECT COUNT(*) FROM blogs");
  const existingCount = Number(check.rows[0].count);

  if (existingCount > 0) {
    console.log("Blogs already seeded");
    return;
  }

  for (let i = 0; i < count; i++) {
    try {
      const { title, content } = await generateRandomBlog();

      await db.query(
        "INSERT INTO blogs (title, content, created_at) VALUES ($1, $2, NOW())",
        [title, content]
      );

      console.log(`Seeded blog: ${title}`);
    } catch (err) {
      console.error("Failed to generate blog:", err.message);
    }
  }

  console.log(`Seeded ${count} AI-generated blogs`);
};