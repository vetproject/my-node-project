// index.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware (optional)
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("✅ Hello from Node.js CI demo!");
});

// Math API example
app.get("/add/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.json({ result: a + b });
});

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

module.exports = app; // Export for testing
