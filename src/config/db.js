const mysql = require("mysql2");

// ✅ Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // 👈 your MySQL username
  password: "",        // 👈 your MySQL password
  database: "crud_db", // 👈 your database name
});

// ✅ Connect to MySQL
db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

module.exports = db;
