const db = require("../config/db");

// ✅ Get all users
exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    res.json(results);
  });
};

// ✅ Get user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
};

// ✅ Add user
exports.addUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  db.query("INSERT INTO users (name) VALUES (?)", [name], (err, result) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    res.status(201).json({ id: result.insertId, name });
  });
};

// ✅ Update user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.query("UPDATE users SET name = ? WHERE id = ?", [name, id], (err, result) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.json({ id, name });
  });
};

// ✅ Delete user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  });
};
