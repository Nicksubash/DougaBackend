import { Pool, QueryResult, PoolClient } from 'pg';
const pool = new Pool({
    user: process.env.NEON_USERNAME,
    host: process.env.NEON_HOST,
    database: process.env.NEON_DATABASE,
    password: process.env.NEON_PASSWORD,
    port: parseInt(process.env.NEON_PORT || '5432', 10),
    ssl: { rejectUnauthorized: false }
  });

  export const initDatabase = async () => {
    try {
      await createUsersTable();
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  };

  export const query = async (text: string, values?: any[]): Promise<QueryResult> => {
    const client: PoolClient = await pool.connect();
    try {
      return await client.query(text, values);
    } finally {
      client.release();
    }
  };
  
  const createUsersTable = async () => {
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);
  };

