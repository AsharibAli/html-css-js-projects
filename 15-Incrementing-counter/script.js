const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  // Function to update the counter
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // Get the target value from the data-target attribute
    const c = +counter.innerHTML; // Get the current value of the counter
    const increment = target / 200; // Calculate the increment by dividing the target by 200

    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`; // Update the counter with the next incremented value
      setTimeout(updateCounter, 1); // Call the updateCounter function after a short delay
    } else {
      counter.innerHTML = target; // If the current value exceeds or equals the target, set it to the target value
    }
  };

  updateCounter(); // Initial call to start updating the counter
});
