import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import bcrypt from 'bcrypt';

dotenv.config();
const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize PostgreSQL Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle pg client', err);
  process.exit(-1);
});

// Test DB Connection Route
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'ok', time: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ status: 'error', error: error.message });
  }
});

// Authenticate / Login Mock
// Since we don't have passwords stored in plain text, this is a simplified mock 
// that creates a unique user record or returns an existing one.
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  const normalizedEmail = email.toLowerCase().trim();

  try {
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [normalizedEmail]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, normalizedEmail, hashedPassword]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const normalizedEmail = email.toLowerCase().trim();

  try {
    // Check if user exists
    const result = await pool.query('SELECT id, name, email, password FROM users WHERE email = $1', [normalizedEmail]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];

    // Check if password matches
    // Note: old users without passwords will have null or empty password, causing compare to fail safely
    if (!user.password) {
       return res.status(401).json({ error: 'User created without a password previously. Please create a new account.' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    // Don't send the hash back to the frontend
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get User Wishlist
app.get('/api/wishlist/:email', async (req, res) => {
  const { email } = req.params;
  const normalizedEmail = email.toLowerCase().trim();

  try {
    const result = await pool.query(`
      SELECT w.package_id as id, w.title, w.price, w.duration, w.image
      FROM wishlists w
      JOIN users u ON w.user_id = u.id
      WHERE u.email = $1
    `, [normalizedEmail]);

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add to Wishlist
app.post('/api/wishlist', async (req, res) => {
  const { email, package_id, title, price, duration, image } = req.body;
  
  if (!email || !package_id) {
    return res.status(400).json({ error: 'Email and package_id are required' });
  }

  const normalizedEmail = email.toLowerCase().trim();

  try {
    // Get user id
    const userResult = await pool.query('SELECT id FROM users WHERE email = $1', [normalizedEmail]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userId = userResult.rows[0].id;

    // Check if already exists
    const checkResult = await pool.query(
      'SELECT id FROM wishlists WHERE user_id = $1 AND package_id = $2',
      [userId, package_id]
    );

    if (checkResult.rows.length > 0) {
      return res.status(400).json({ error: 'Already in wishlist' });
    }

    // Insert
    await pool.query(
      'INSERT INTO wishlists (user_id, package_id, title, price, duration, image) VALUES ($1, $2, $3, $4, $5, $6)',
      [userId, package_id, title, price, duration, image]
    );

    res.status(201).json({ status: 'success' });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove from Wishlist
app.delete('/api/wishlist/:email/:package_id', async (req, res) => {
  const { email, package_id } = req.params;
  const normalizedEmail = email.toLowerCase().trim();

  try {
    const userResult = await pool.query('SELECT id FROM users WHERE email = $1', [normalizedEmail]);
    if (userResult.rows.length > 0) {
      const userId = userResult.rows[0].id;
      await pool.query('DELETE FROM wishlists WHERE user_id = $1 AND package_id = $2', [userId, package_id]);
    }
    
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`🚀 PostgreSQL API Server running on http://localhost:${port}`);
});
