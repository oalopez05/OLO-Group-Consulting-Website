// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the hamburger menu icon and the navigation list
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('#main-nav');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle('active');
    });

});

// --- Animation On Scroll ---
// Create an observer
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

// Get all the elements with the .fade-in-section class
const sectionsToFade = document.querySelectorAll('.fade-in-section');

// Tell the observer to watch each of those elements
sectionsToFade.forEach(section => {
  observer.observe(section);
});