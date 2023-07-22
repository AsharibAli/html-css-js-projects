const loadText = document.querySelector(".loading-text"); // Retrieves the HTML element with the class "loading-text" and assigns it to the variable loadText
const bg = document.querySelector(".bg"); // Retrieves the HTML element with the class "bg" and assigns it to the variable bg

let load = 0; // Declares and initializes a variable named load with a value of 0

let int = setInterval(blurring, 30); // Sets up an interval that calls the blurring function every 30 milliseconds

function blurring() {
  // Defines the blurring function
  load++; // Increments the value of load by 1

  if (load > 99) {
    // Checks if load is greater than 99
    clearInterval(int); // Stops the interval if load is greater than 99
  }

  loadText.innerText = `${load}%`; // Updates the text content of the loadText element to display the current value of load followed by "%"
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // Calculates the opacity value based on the value of load using the scale function and applies it to the loadText element
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // Calculates the blur radius based on the value of load using the scale function and applies it to the bg element
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  // Defines a scale function that maps a range of numbers to another range of numbers
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min; // Returns the mapped value using a formula
};
