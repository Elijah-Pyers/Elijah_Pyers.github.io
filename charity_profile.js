// Ensure the DOM content is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the "Volunteer Now" button
  const volunteerButton = document.getElementById('volunteerBtn');
  const formContainer = document.getElementById('formContainer');

  if (volunteerButton) {
    volunteerButton.addEventListener('click', function () {
      // Check if the form already exists
      if (!formContainer.innerHTML) {
        // Create the form dynamically
        const form = `
          <form id="volunteerForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="message">Why do you want to volunteer?</label>
            <textarea id="message" name="message" required></textarea>
            <br>
            <button type="submit">Submit</button>
          </form>
        `;
        formContainer.innerHTML = form;

        // Add a listener for form submission
        const volunteerForm = document.getElementById('volunteerForm');
        volunteerForm.addEventListener('submit', function (e) {
          e.preventDefault(); // Prevent the default form submission
          alert('Thank you for volunteering!');
          formContainer.style.display = 'none'; // Hide the form after submission
        });
      }
      formContainer.style.display = 'block'; // Show the form when button is clicked
    });
  }

  // Add another interactive element (hover feature)
  const charityDetails = document.getElementById('charityDetails');

  if (charityDetails) {
    // Add event listeners for hover
    charityDetails.addEventListener('mouseover', function () {
      charityDetails.textContent =
        'Helping those in need since 2000. We focus on providing food, shelter, and education to underprivileged communities.';
    });

    charityDetails.addEventListener('mouseout', function () {
      charityDetails.textContent = 'Helping those in need since 2000.';
    });
  }
});
