const express = require('express');
const router = express.Router();
const { pool } = require('../models/ChatInteraction');

// POST /interaction - With RL data tracking
router.post('/interaction', async (req, res) => {
  try {
    const { userQuery, botResponse, context } = req.body;
    const query = `
      INSERT INTO chat_interactions 
        (user_query, bot_response, context, helpful, usage_count)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`;
    const values = [userQuery, botResponse, context, null, 1];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /feedback/:id - Enhanced for RL
router.post('/feedback/:id', async (req, res) => {
  try {
    const { helpful } = req.body;
    const updateQuery = `
      UPDATE chat_interactions
      SET helpful = $1,
          reward_score = CASE 
            WHEN $1 THEN reward_score + 1 
            ELSE reward_score - 1 
          END
      WHERE id = $2
      RETURNING *`;
    const values = [helpful, req.params.id];
    const result = await pool.query(updateQuery, values);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Interaction not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /similar - RL-optimized response selection
router.get('/similar', async (req, res) => {
  try {
    const { query: searchQuery, helpful } = req.query;
    if (!searchQuery) return res.status(400).json({ error: 'Query parameter is required' });

    const query = `
      SELECT *, 
        (reward_score * 0.6) + (confidence_score * 0.4) AS rl_score
      FROM chat_interactions
      WHERE user_query ILIKE $1
        ${helpful ? 'AND helpful = true' : ''}
      ORDER BY rl_score DESC
      LIMIT 5`;
    const values = [`%${searchQuery}%`];
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /retrain - Model retraining endpoint (simplified)
router.post('/retrain', async (req, res) => {
  try {
    const { model } = req.body;
    // In production: Actual retraining logic using collected feedback data
    // For demo: Update confidence scores based on feedback
    await pool.query(`
      UPDATE chat_interactions
      SET confidence_score = confidence_score * (1 + (reward_score * 0.1))
      WHERE helpful IS NOT NULL
    `);
    res.json({ status: 'Retraining completed', model });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;