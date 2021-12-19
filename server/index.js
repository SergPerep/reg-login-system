const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

// Middleware

app.use(express.json()); // decodes request body
app.use(cors()) // let us to connect to ports different from current

// ROUTES //

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})