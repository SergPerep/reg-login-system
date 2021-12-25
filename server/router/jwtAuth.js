const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

// Registering

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // If user already exists...
        const user = await pool.query(`SELECT * FROM users WHERE email = $1`,
            [email]
        );
        if (user.rows.length !== 0) {
            return res.status(401).send("User already exist");
        }
        // Define salt rounds
        const saltRounds = 12;
        // Generate salt
        const salt = await bcrypt.genSalt(saltRounds);
        // Concat salt and password and make a hash
        const hash = await bcrypt.hash(password, salt);
        // Put user inside our database
        const newUser = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, hash]
        );
        // Generate JSON Web Token
        const token = jwtGenerator(newUser.rows[0].id);
        // Feedback to client
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;