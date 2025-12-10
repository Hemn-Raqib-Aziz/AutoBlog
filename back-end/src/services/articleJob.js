import cron from "node-cron";
import db from "../config/db.js";
import { generateRandomBlog } from "./aiClient.js";

const createScheduledRandomBlog = async () => {
  try {
    const { title, content } = await generateRandomBlog();

    await db.query(
      "INSERT INTO blogs (title, content, created_at) VALUES ($1, $2, NOW())",
      [title, content]
    );

    console.log(`Cron blog generated: ${title}`);

  } catch (err) {
    console.error("Cron job failed:", err.message);
  }
};

export const startArticleCron = () => {
  cron.schedule("50 22 * * *", async () => {
    console.log("Running daily random article cron...");
    await createScheduledRandomBlog();
  },
  {
    timezone: "Asia/Baghdad"
  }
);

  console.log("Cron job activated (runs at 03:00 AM daily)");
};
