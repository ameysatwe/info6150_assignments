$(document).ready(() => {
  const validateEmail = () => {
    const email = $("#email").val();
    if (!email.endsWith("@northeastern.edu")) {
      $("#emailError").text("Email must be a northeastern.edu email");
      return false;
    } else {
      $("#emailError").text("");
      return true;
    }
  };

  const validateUsername = () => {
    const username = $("#username").val();
    if (
      username.length < 3 ||
      username.length > 15 ||
      /[^a-zA-Z0-9]/.test(username)
    ) {
      $("#usernameError").text(
        "Username must be between 3-15 characters and contain no special characters."
      );
      return false;
    } else {
      $("#usernameError").text("");
      return true;
    }
  };

  const validatePassword = () => {
    const password = $("#password").val();
    if (password.length < 6) {
      $("#passwordError").text("Password must be at least 6 characters long.");
      return false;
    } else {
      $("#passwordError").text("");
      return true;
    }
  };

  const validateConfirmPassword = () => {
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    if (confirmPassword !== password) {
      $("#confirmPasswordError").text("Passwords do not match.");
      return false;
    } else {
      $("#confirmPasswordError").text("");
      return true;
    }
  };

  const enableLoginButton = () => {
    if (
      validateEmail() &&
      validateUsername() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      $("#loginButton").prop("disabled", false).addClass("enabled");
    } else {
      $("#loginButton").prop("disabled", true).removeClass("enabled");
    }
  };

  // Trigger validation on blur for each field
  $("#email").on("blur", validateEmail);
  $("#username").on("blur", validateUsername);
  $("#password").on("blur", validatePassword);
  $("#confirmPassword").on("blur", validateConfirmPassword);

  $("#email").on("focus", validateEmail);
  $("#username").on("focus", validateUsername);
  $("#password").on("focus", validatePassword);
  $("#confirmPassword").on("focus", validateConfirmPassword);

  $("#email").on("input", validateEmail);
  $("#username").on("input", validateUsername);
  $("#password").on("input", validatePassword);
  $("#confirmPassword").on("input", validateConfirmPassword);

  // Enable the login button if all fields are valid
  $("#loginForm input").on("blur", enableLoginButton);
  $("#loginForm input").on("input", enableLoginButton);

  // On form submit
  $("#loginForm").on("submit", (e) => {
    e.preventDefault();
    if (
      validateEmail() &&
      validateUsername() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      const username = $("#username").val();
      localStorage.setItem("username", username);
      window.location.href = "calculator.html";
    }
  });
});
