function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    var emailError = document.getElementById("login-email-error");
    var passwordError = document.getElementById("login-password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (email.trim() === "") {
      emailError.textContent = "Please enter your email.";
      return;
    }

    if (password.trim() === "") {
      passwordError.textContent = "Please enter your password.";
      return;
    }

    // Perform login verification here (e.g., check against a database)

    // Redirect to the page after successful login
    window.location.href = "index.html";
  }

  function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    var emailError = document.getElementById("signup-email-error");
    var passwordError = document.getElementById("signup-password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (email.trim() === "") {
      emailError.textContent = "Please enter your email.";
      return;
    }

    if (password.trim() === "") {
      passwordError.textContent = "Please enter your password.";
      return;
    }

    // Perform signup and store user data in a database

    // Redirect to the page after successful signup
    window.location.href = "index.html";
  }