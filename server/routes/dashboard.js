const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async(req, res) => {
    try {
        const userId = req.user;
        const user = await pool.query(`SELECT name FROM users WHERE id = $1`, [userId]);
        res.json(user.rows[0]);
    } catch (error) {
        error.console(error.message);
        res.status(500).json("Server error");
    }
})
module.exports = router;

