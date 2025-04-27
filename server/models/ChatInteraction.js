
// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/credora',
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// // Create chat_interactions table if it doesn't exist
// const createTable = async () => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS chat_interactions (
//       id SERIAL PRIMARY KEY,
//       user_query TEXT NOT NULL,
//       bot_response TEXT NOT NULL,
//       helpful BOOLEAN DEFAULT NULL,
//       feedback_count INTEGER DEFAULT 0,
//       positive_feedback_count INTEGER DEFAULT 0,
//       confidence_score FLOAT DEFAULT 0.5,
//       context JSONB,
//       timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;
  
//   try {
//     await pool.query(query);
//     console.log('Chat interactions table created successfully');
//   } catch (err) {
//     console.error('Error creating chat interactions table:', err);
//   }
// };

// createTable();

// module.exports = {
//   pool,
//   createTable
// };
