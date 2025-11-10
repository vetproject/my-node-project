// src/controllers/userController.js

// Mock user data
const users = [
  { id: 1, name: "Rin" },
  { id: 2, name: "YOUERN" },
  { id: 3, name: "Alex" },
];

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};
