document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle validation

    // Clear any previous error messages
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(msg) {
      msg.remove();
    });

    let formIsValid = true;

    // Email validation
    let email = document.getElementById('email');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      formIsValid = false;
      showError(email, "Please enter a valid email address.");
    }

    // First name validation 
    let fname = document.getElementById('fname');
    if (fname.value.trim() === "") {
      formIsValid = false;
      showError(fname, "First name is required.");
    }

    // Last name validation 
    let lname = document.getElementById('lname');
    if (lname.value.trim() === "") {
      formIsValid = false;
      showError(lname, "Last name is required.");
    }

    // Phone number validation
    let phone = document.getElementById('phone-number');
    let phonePattern = /^\d{3}[\-]\d{3}[\-]\d{4}$/;
    if (!phonePattern.test(phone.value)) {
      formIsValid = false;
      showError(phone, "Phone number must be in the format: 123-456-7890.");
    }

    // Message validation
    let message = document.getElementById('message');
    if (message.value.trim() === "") {
      formIsValid = false;
      showError(message, "Message is required.");
    }

    if (formIsValid) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });

    // Display error messages
  function showError(inputElement, message) {
    let errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '12px';
    errorMessage.textContent = message;
    inputElement.insertAdjacentElement('afterend', errorMessage);
  }
