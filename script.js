// HAMBURGER NAV BAR 
function navFunction() {
  const hamNav = document.getElementById("links");
  if (hamNav.style.display === "block") {
    hamNav.style.display = "none";
  } else {
    hamNav.style.display = "block";
  }
}
// END OF HAMBURGER

// FORM VALIDATION 

const contactForm = document.getElementById('contactForm');
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");


// Listen for form submission event
contactForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission
    validateInput(); // Call the validation function
});


// Listen for click event on the submit button
document.getElementById("submit").addEventListener("click", function(){
    validateInput(); // Call the validation function
});


// Function to display error message and clear input
const error = (element, message) => {
    const errorAlert = element.nextElementSibling; // Select error message element


    errorAlert.innerText = message; // Set error message text
    element.parentElement.classList.add('error'); // Add 'error' class to parent element
    element.value = ''; // Clear the input field
}


// Function to validate form inputs
const validateInput = () => {
    const lettersOnly = /^[A-Za-z]+$/; // Regular expression for letters only
    const emailFormat = /^\S+@\S+\.\S+$/; // Regular expression for email format


    const fNameValue = firstName.value.trim(); // Get first name value
    const lNameValue = lastName.value.trim(); // Get last name value
    const emailValue = email.value.trim(); // Get email value
    const messageValue = message.value.trim(); // Get message value


    // Validate first name
    if (!fNameValue.match(lettersOnly)) {
        error(firstName, 'First name should contain only letters');
    } else {
        firstName.parentElement.classList.remove('error');
    }


    // Validate last name
    if (!lNameValue.match(lettersOnly)) {
        error(lastName, 'Last name should contain only letters');
    } else {
        lastName.parentElement.classList.remove('error');
    }


    // Validate email
    if (!emailValue.match(emailFormat)) {
        error(email, 'Please enter a valid email address');
    } else {
        email.parentElement.classList.remove('error');
    }
};

