const express = require("express");
const pool = require("./db");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world testing");
});


app.get("/students", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM students");
      res.json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
