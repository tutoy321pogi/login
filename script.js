document.addEventListener("DOMContentLoaded", function() {
    // Get references to input fields and login button
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginBtn = document.getElementById("loginBtn");
  
    // Admin credentials
    var adminUsername = "admin";
    var adminPassword = "admin123";
  
    // Event listener for login button click
    loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission
  
      var username = usernameInput.value;
      var password = passwordInput.value;
  
      // Check if username and password match admin credentials
      if (username === adminUsername && password === adminPassword) {
        // Redirect to landing page
        window.location.href = "https://tutoy321pogi.github.io/main/";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  