// src/app.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

// ✅ Add this BEFORE your routes
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const categoryRoutes = require("./routes/categoriesRouter");
app.use("/api/categories", categoryRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("✅ Welcome to the Real Node.js API!");
});

module.exports = app;
