// Predefined credentials
const predefinedUsername = "user123";
const predefinedPassword = "pass123";

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user inputs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate credentials
  if (username === predefinedUsername && password === predefinedPassword) {
    alert('Login successful! Redirecting to the main page...');
    window.location.href = 'index.html'; // Redirect to the main page
  } else {
    // Show error message
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Invalid username or password. Please try again.';
    errorMessage.style.display = 'block';
  }
});