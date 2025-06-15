const express = require('express');

const app = express();

const userRoutes = require('./routes/user');

// To parse JSON bodies
app.use(express.json());

app.use('/', userRoutes);

const PORT = process.env.PORT || 5000;

const cors = require('cors');

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});

