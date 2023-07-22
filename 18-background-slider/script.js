const body = document.body; // Get the reference to the body element of the HTML document
const slides = document.querySelectorAll(".slide"); // Get all elements with the class 'slide' and store them in a NodeList
const leftBtn = document.getElementById("left"); // Get the element with the id 'left' and store it in a variable
const rightBtn = document.getElementById("right"); // Get the element with the id 'right' and store it in a variable

let activeSlide = 0; // Initialize a variable to keep track of the currently active slide index

rightBtn.addEventListener("click", () => {
  // Add a click event listener to the right button
  activeSlide++; // Increment the active slide index

  if (activeSlide > slides.length - 1) {
    // Check if the active slide index is greater than the number of slides minus one
    activeSlide = 0; // If true, set the active slide index back to zero to start from the beginning
  }
  setBgToBody(); // Call the function to update the background image of the body
  setActiveSlide(); // Call the function to set the active class on the corresponding slide
});

leftBtn.addEventListener("click", () => {
  // Add a click event listener to the left button
  activeSlide--; // Decrement the active slide index
  if (activeSlide < 0) {
    // Check if the active slide index is less than zero
    activeSlide = slides.length - 1; // If true, set the active slide index to the last slide index
  }
  setBgToBody(); // Call the function to update the background image of the body
  setActiveSlide(); // Call the function to set the active class on the corresponding slide
});

setBgToBody(); // Call the function to initially set the background image of the body

function setBgToBody() {
  // Define a function to set the background image of the body
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage; // Set the background image of the body to the background image of the active slide
}

function setActiveSlide() {
  // Define a function to set the active class on the corresponding slide
  slides.forEach((slide) => slide.classList.remove("active")); // Remove the 'active' class from all the slides
  slides[activeSlide].classList.add("active"); // Add the 'active' class to the currently active slide
}
