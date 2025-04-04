etTimeout(function() {
      // Simulate the button click
      document.getElementById("submit-button").click();
      // Show the "Thanks for signing up" message
      document.getElementById("feedback").style.color = "green";
      document.getElementById("feedback").textContent = "Thanks for signing up! and welcome to yugioh duel links";
    }, 3000);  // This will click the submit button after 3 secondss