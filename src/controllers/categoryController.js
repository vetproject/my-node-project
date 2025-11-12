const db = require("../config/db");

// ✅ Get all categories
exports.getAllCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// ✅ Get category by ID
exports.getCategoryById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM categories WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(results[0]);
  });
};

// ✅ Add new category
exports.addCategory = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  db.query("INSERT INTO categories (name) VALUES (?)", [name], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ id: result.insertId, name });
  });
};

// ✅ Update category by ID
exports.updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.query("UPDATE categories SET name = ? WHERE id = ?", [name, id], (err, result) => {
    if (err) {
      console.error("Update error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ id, name });
  });
};

// ✅ Delete category by ID
exports.deleteCategory = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM categories WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Delete error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  });
};
