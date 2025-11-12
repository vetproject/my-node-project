const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

// Routes
router.get("/", getAllCategories);          // Get all categories
router.get("/:id", getCategoryById);        // Get category by ID
router.post("/", addCategory);              // Add new category
router.put("/:id", updateCategory);         // Update category by ID
router.delete("/:id", deleteCategory);      // Delete category by ID

module.exports = router;
