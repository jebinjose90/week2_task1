document.getElementById("emailForm").addEventListener("submit", function(event) {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  // Regular expression for email validation
  var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!regex.test(email)) {
    alert("Email is not valid. Please enter a valid email address.");
    event.preventDefault(); // Prevent the form from submitting
  }else{
    alert("Email send successfully.");
  }
});

document.getElementById("emailForm2").addEventListener("submit", function(event) {
  var emailInput = document.getElementById("email2");
  var email = emailInput.value;

  // Regular expression for email validation
  var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!regex.test(email)) {
    alert("Email is not valid. Please enter a valid email address.");
    event.preventDefault(); // Prevent the form from submitting
  }else{
    alert("Email send successfully.");
  }
});


// Add a click event listener to the anchor link
document.getElementById("alertLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior (navigation)
  alert("You are watching in English...!");
});

// Add a click event listener to the anchor link
document.getElementById("alertLink2").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior (navigation)
  alert("Sign in Successfully..!");
});