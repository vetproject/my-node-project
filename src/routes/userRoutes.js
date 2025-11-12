// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById,deleteUser,updateUser,addUser } = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
