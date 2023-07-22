// Select all elements with the class "faq-toggle" and store them in the 'toggles' variable
const toggles = document.querySelectorAll(".faq-toggle");

// Iterate over each toggle element using the forEach method
toggles.forEach((toggle) => {
  // Add a click event listener to each toggle element
  toggle.addEventListener("click", () => {
    // Toggle the "active" class on the parent node of the clicked toggle element
    toggle.parentNode.classList.toggle("active");
  });
});
