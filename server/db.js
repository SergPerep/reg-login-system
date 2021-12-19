const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    post: 5432,
    database: "jwt"
});

module.exports = pool;