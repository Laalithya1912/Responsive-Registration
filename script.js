// ================= LOGIN =================
function login() {
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  let storedEmail = localStorage.getItem("userEmail");

  if (email !== storedEmail) {
    alert("User not found! Please register.");
    return;
  }

  alert("Login Successful!");
  window.location.href = "dashboard.html";
}


// ================= REGISTER =================
function register() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();
  let confirm = document.getElementById("confirmPassword").value.trim();

  if (name === "" || email === "" || pass === "" || confirm === "") {
    alert("All fields required!");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  // STORE DATA
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);

  alert("Registration Successful!");
  window.location.href = "login.html";
}


// ================= PAGE LOAD =================
window.onload = function () {

  let path = window.location.pathname;

  // 🔒 Protect all pages
  if (
    path.includes("dashboard.html") ||
    path.includes("profile.html") ||
    path.includes("settings.html") ||
    path.includes("notifications.html")
  ) {
    let user = localStorage.getItem("userName");

    if (!user) {
      alert("Please login first!");
      window.location.href = "login.html";
      return;
    }
  }

  // 👋 Dashboard welcome
  if (path.includes("dashboard.html")) {
    let user = localStorage.getItem("userName");
    document.getElementById("welcomeText").innerText =
      "Welcome, " + user + " 👋";
  }

  // 👤 Profile page data
  if (path.includes("profile.html")) {
    let name = localStorage.getItem("userName");
    let email = localStorage.getItem("userEmail");

    document.getElementById("profileName").innerText = "Name: " + name;
    document.getElementById("profileEmail").innerText = "Email: " + email;
  }
};


// ================= NAVIGATION =================
function goTo(page) {
  window.location.href = page;
}


// ================= LOGOUT =================
function logout() {
  localStorage.clear();
  alert("Logged out successfully!");
  window.location.href = "login.html";
}


// ================= TOGGLE PASSWORD =================
function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}


// ================= SETTINGS =================
function updateName() {
  let newName = document.getElementById("newName").value.trim();

  if (newName === "") {
    alert("Enter a valid name!");
    return;
  }

  localStorage.setItem("userName", newName);
  alert("Name updated successfully!");
}