const smallCups = document.querySelectorAll(".cup-small");
// Retrieves all elements with class "cup-small" and stores them in the variable smallCups

const liters = document.getElementById("liters");
// Retrieves the element with id "liters" and stores it in the variable liters

const percentage = document.getElementById("percentage");
// Retrieves the element with id "percentage" and stores it in the variable percentage

const remained = document.getElementById("remained");
// Retrieves the element with id "remained" and stores it in the variable remained

updateBigCup();
// Calls the function updateBigCup()

smallCups.forEach((cup, idx) => {
  // Loops through each smallCup element and assigns an event listener to it
  cup.addEventListener("click", () => highlightCups(idx));
  // When a smallCup element is clicked, it invokes the highlightCups function with the index passed as an argument
});

function highlightCups(idx) {
  // Defines the function highlightCups with the parameter idx

  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
  // If the last smallCup (index 7) is full, decrease the index by 1
  else if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  // If the current smallCup is full and the next smallCup is not full, decrease the index by 1

  smallCups.forEach((cup, idx2) => {
    // Loops through each smallCup element and assigns an event listener to it
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
    // Adds the class "full" to smallCups with an index less than or equal to idx, and removes the class "full" from the rest
  });

  updateBigCup();
  // Calls the function updateBigCup()
}

function updateBigCup() {
  // Defines the function updateBigCup

  const fullCups = document.querySelectorAll(".cup-small.full").length;
  // Retrieves all elements with class "cup-small" and class "full", and stores their length in the variable fullCups

  const totalCups = smallCups.length;
  // Stores the length of smallCups in the variable totalCups

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  // Updates the CSS styles and text content of the percentage element based on the ratio of fullCups to totalCups

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
  // Updates the CSS styles and text content of the remained element based on the calculation of remaining water in liters
}
