// Add event listener to the Home link to reload the page
document.getElementById('home-link').addEventListener('click', function(e) {
  e.preventDefault();
  location.href = 'index.html';
});

// Add event listener to the Team link to reload the page
document.getElementById('team-link').addEventListener('click', function(e) {
  e.preventDefault();
  location.href = 'team.html';
});

// Add event listener to the Contact link to dynamically load the contact section
document.getElementById('contact-link').addEventListener('click', function(e) {
  e.preventDefault();
  loadContactSection();
});

// Function to load the Contact section content dynamically
function loadContactSection() {
  const contactContainer = document.getElementById('contact-container');

  const contactHTML = `
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Location: XYZ Lab, 1234 Research Avenue, Science City</p>
      <p>Email: <a href="mailto:xyz@example.com">xyz@example.com</a></p>
    </section>
  `;

  contactContainer.innerHTML = contactHTML;
  contactContainer.scrollIntoView({ behavior: 'smooth' });
}




