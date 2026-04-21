import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function initDB() {
  console.log('Connecting to PostgreSQL to initialize tables...');
  
  if (!process.env.DATABASE_URL) {
    console.error('ERROR: Missing DATABASE_URL in .env file.');
    process.exit(1);
  }

  try {
    // Create Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      
      -- Attempt to add password column if it doesn't exist (if the table was already created)
      ALTER TABLE users ADD COLUMN IF NOT EXISTS password VARCHAR(255);
    `);
    console.log('✅ Users table ensured.');

    // Create Wishlists table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS wishlists (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        package_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        duration VARCHAR(100),
        image TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, package_id)
      );
    `);
    console.log('✅ Wishlists table ensured.');

    console.log('Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initDB();
