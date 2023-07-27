// Function to handle login attempts
function login() {
  // Get the username and password from the input fields
  const username = document.getElementById('username-a30d').value;
  const password = document.getElementById('password-a30d').value;

  // Check if the entered username and password match the credentials
  if (username === 'John Doe' && password === 'qwerty') {
    // Redirect to the home page
    window.location.href = 'home.html';
  } else {
    // Decrement the login attempts
    attempts--;

    if (attempts > 0) {
      // Display an error message with remaining attempts
      alert(`Invalid credentials! You have ${attempts} attempts left.`);
    } else {
      // Disable the login button and display an error message
      document.querySelector('.u-btn-1').setAttribute('disabled', 'true');
      alert('You have run out of attempts. Please try again later.');
    }
  }
}

// Number of login attempts allowed
let attempts = 3;

// Attach the login function to the form's submit event
document.querySelector('.u-form-1').addEventListener('submit', function(event) {
  event.preventDefault();
  login();
});
