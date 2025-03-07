document.getElementById('signup-form').addEventListener('submit', function(event) {
      // Get values from form fields
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      
      // Get the error message element
      const errorMessage = document.getElementById('error-message');