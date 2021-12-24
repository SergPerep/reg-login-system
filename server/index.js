const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const PORT = 5000;

// Middleware

app.use(express.json()); // decodes request body
app.use(cors()) // let us to connect to ports different from current

// ROUTES //

// Register
app.use("/auth", require("./router/jwtAuth"));

app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query(`SELECT * FROM users`);
        // Feedback to client
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
})




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})