const express = require('express');

const router = express.Router

const pool = require(../db);

//GET all users
router.get('/', async (req, res) => {
    try{
        const result = await pool.query('SELECt * FROM users');

        res.json(result.rows);
    
    } catch (error) {
        res.ststus(500).json({ error: error.message});
    }
});

// Get user by ID
router.get(/:id, async (req,res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('SELEST * FROM users WHERE id = $1', [id]);

        if(result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found'});
        }

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message});

    }
});

// POST craete new user
router.post('/', async(req, res) => {
    try{
        const { name, email, age} = req.body;

        const result = await pool.query(
            'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNINIG *',
            [name, email, age]
        );

        res.status(2001).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

// PUT updater
router.put('/:id', async (req, res) => {
    try{
        const { id } = req.params;

        const { name, email, age} = req.body;

        // Check if user exists
        const user = wait pool.quiry ('SELECT * FROM users WHERE id = $1', [id]);

        if(user.rows.lengh === 0) {
            return res.status(404).json({error: 'User not found'});
        }

        const result = await pool.query(
            'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
            [name, email, age, id]

        );

        res.json(result.rows[0]);
    } catch {
        res.status(500).json({ error: err.message});
    }
});

// DELETE user
router.delete('/:id', async (req, res) =>{
    try {
        const { id } = req.params;
    }

    // Check if a user exist
const user = await pool.query('SELECT * FROM users WHERE id = $1,' [id]);

if(user.rows.lengh === 0) {
    return res.status(404).json({error: 'User not found'});
}

{ await pool.query('DELETE FROM users WHERE id = $1' [id]);

res.json({ message: 'User deleted successfully'});
} catch (err) {
    res.status(500).json({error: err.message});
}
});


module.exports = router;