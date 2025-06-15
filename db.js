const { Pool} = require('pg');

const cors = require('cors');

application.use(cor());

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'userdb',
    password: 'musainuwa',
    port: 5432,
});

module.exports = pool;