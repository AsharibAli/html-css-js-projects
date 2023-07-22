const boxes = document.querySelectorAll(".box");
// Selects all elements with the class "box" and stores them in the `boxes` constant

window.addEventListener("scroll", checkBoxes);
// Adds a scroll event listener to the window, which calls the `checkBoxes` function when scrolled

checkBoxes();
// Calls the `checkBoxes` function to initially check the visibility of the boxes

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  // Calculates the position where the boxes should start animating based on the viewport height

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    // Gets the top position of each box relative to the viewport

    if (boxTop < triggerBottom) {
      box.classList.add("show");
      // Adds the "show" class to the box if it has reached the trigger point
    } else {
      box.classList.remove("show");
      // Removes the "show" class from the box if it hasn't reached the trigger point
    }
  });
}
// Loops through each box element and checks if it has reached the trigger point based on its position
