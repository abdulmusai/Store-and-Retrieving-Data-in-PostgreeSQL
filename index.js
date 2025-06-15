const express = require('express');

const app = express();

const userRoutes = require('./routes/user');

// To parse JSON bodies
app.use(express.json());

app.use('/', userRoutes);

const PORT = process.env.PORT || 5000;

//Connect to PostgresSQL
const pool = new Pool({
    user:'postgres',
    hsot:'localhost',
    database:'userdb',
    password: 'musainuwa',
    port: 5432,
});

// Endpoint to fetch users
app.get('/users', async(req, res)
{
    try {
        const result = await
        pool.query('SELECT * FROM public.users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});

