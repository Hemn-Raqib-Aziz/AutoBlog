import pkg from 'pg';
import './config.js'

const { Pool } = pkg;

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
});


db.on("error", (err) => {
    console.log("Unexpected PostgreSQL error: ", err.message);
});

export default db;