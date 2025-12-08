import { Client } from 'pg';
import './config.js'

export const createDatabaseIfNotExists = async () => {
    const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.INIT_DB_NAME,
    port: Number(process.env.DB_PORT)
});

await client.connect();

const dbName = process.env.DB_NAME;

const checkQuery = `SELECT 1 FROM pg_database WHERE datname='${dbName}'`;
const result = await client.query(checkQuery);

if (result.rowCount === 0) {
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`DATABASE "${dbName}" created`);
} else {
    console.log(`DATABASE "${dbName}" already exists!`);
}

await client.end();
}

