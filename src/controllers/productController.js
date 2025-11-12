const db = require("../config/db");

// Get all products
exports.getAllProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// Get product by ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching product:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0)
      return res.status(404).json({ message: "Product not found" });
    res.json(results[0]);
  });
};

// Add new product
exports.addProduct = (req, res) => {
  const { name, category } = req.body;
  if (!name)
    return res.status(400).json({ message: "Name is required" });

  db.query(
    "INSERT INTO products (name, category) VALUES (?, ?)",
    [name, category],
    (err, result) => {
      if (err) {
        console.error("Error adding product:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.status(201).json({ id: result.insertId, name, category });
    }
  );
};

// Update product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, category } = req.body;
  db.query(
    "UPDATE products SET name = ?, category = ? WHERE id = ?",
    [name, category, id],
    (err, result) => {
      if (err) {
        console.error("Error updating product:", err);
        return res.status(500).json({ message: "Database error" });
      }
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Product not found" });
      res.json({ id, name, category });
    }
  );
};

// Delete product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting product:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  });
};
