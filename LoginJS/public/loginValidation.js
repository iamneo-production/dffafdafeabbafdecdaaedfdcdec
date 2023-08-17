function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve registered user data from local storage
    var storedUserData = localStorage.getItem('registeredUser');
    
    if (storedUserData) {
        var userData = JSON.parse(storedUserData);
        if (username === userData.username && password === userData.password) {
            alert("Login successful! Role: " + userData.role);
            window.location.href = 'home.html';

            return false;
        }
    }

    alert("Invalid username or password.");
    return false;
}

module.exports = {
    validateLogin
  };