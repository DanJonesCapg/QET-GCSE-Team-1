// Function to handle login attempts
function login() {
  // Get the username and password from the input fields
  const username = document.getElementById('Bitmasher').value;
  const password = document.getElementById('Bitmasher').value;

  // Check if the entered username and password match the credentials
  if (username === 'Bitmashers' && password === 'Bitmashers123') {
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
  } else {
    // Decrement the login attempts
    attempts--;
    // Display an error message
    alert(`Invalid credentials! You have ${attempts} attempts left.`);
    
    // If attempts become zero, disable the login button
    if (attempts === 0) {
      document.querySelector('.u-btn-1').setAttribute('disabled', 'true');
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
