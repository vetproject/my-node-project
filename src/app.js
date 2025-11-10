// src/app.js
const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("✅ Welcome to the Real Node.js API!");
});

module.exports = app;
