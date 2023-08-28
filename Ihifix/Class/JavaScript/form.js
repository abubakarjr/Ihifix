function validateForm() {
    // Get the values of the form fields
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Check if the fullname is empty
    if (fullname == "") {
      document.getElementById("fullnameError").innerHTML = "Please enter your Full Name.";
      return false;
    }
        
    // Check if the email is empty
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Please enter your Email.";
      return false;
    }
  
    // Check if the email is in the correct format
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML = "Email is not in the correct format.";
      return false;
    }
  
    // Check if the password is empty
    if (password == "") {
      document.getElementById("passwordError").innerHTML = "Password is required.";
      return false;
    }
  
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
      return false;
    }
  
    // Check if the confirm password matches the password
    if (password != confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
      return false;
    }
  
    // The form is valid, so return true
    return true;
  }