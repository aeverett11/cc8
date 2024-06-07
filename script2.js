document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const displayArea = document.getElementById('displayArea');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate that all fields are filled out
        if (!name || !email || !password) {
            alert('All fields must be filled out');
            return;
        }

        // Create a new paragraph element to display the registration details
        const registrationDetails = document.createElement('p');
        registrationDetails.textContent = `Name: ${name}, Email: ${email}`;

        // Append the registration details to the display area
        displayArea.appendChild(registrationDetails);

        // Optionally, you can reset the form fields after successful submission
        form.reset();
    });
});