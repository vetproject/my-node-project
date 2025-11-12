const API_URL = "http://localhost:3000/api/users";
const container = document.getElementById("views");
const form = document.getElementById("addForm");

// ✅ Load all users
async function fetchUsers() {
  container.innerHTML = "<p>Loading...</p>";
  try {
    const res = await fetch(API_URL);
    const users = await res.json();
    container.innerHTML = "";
    users.forEach(renderUser);
  } catch {
    container.innerHTML = "<p style='color:red;'>Failed to load users.</p>";
  }
}

// ✅ Render single user card
function renderUser(user) {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${user.name}</h3>
    <p>ID: ${user.id}</p>
    <button onclick="deleteUser(${user.id})">Delete</button>
    <button onclick="editUser(${user.id}, '${user.name}')">Edit</button>
  `;
  container.appendChild(div);
}

// ✅ Add user
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (!name) return alert("Enter name");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  form.reset();
  fetchUsers();
});

// ✅ Delete user
async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchUsers();
}

// ✅ Edit user
async function editUser(id, oldName) {
  const newName = prompt("Edit name:", oldName);
  if (!newName || newName === oldName) return;
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName }),
  });
  fetchUsers();
}

// Load on start
window.addEventListener("DOMContentLoaded", fetchUsers);
