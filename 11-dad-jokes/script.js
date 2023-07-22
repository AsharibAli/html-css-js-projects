// Get the element with id "joke" and store it in the jokeEl variable
const jokeEl = document.getElementById("joke");

// Get the element with id "jokeBtn" and store it in the jokeBtn variable
const jokeBtn = document.getElementById("jokeBtn");

// Add an event listener to the jokeBtn element, listening for a click event and calling the generateJoke function when clicked
jokeBtn.addEventListener("click", generateJoke);

// Call the generateJoke function when the page loads
generateJoke();

// Using async/await to make an asynchronous HTTP request and update the jokeEl element with a dad joke
async function generateJoke() {
  // Define the headers for the fetch request
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // Send a GET request to the specified URL and pass the config object as second parameter
  const res = await fetch("https://icanhazdadjoke.com", config);

  // Convert the response data to JSON format
  const data = await res.json();

  // Update the innerHTML of the jokeEl element with the joke received from the API
  jokeEl.innerHTML = data.joke;
}
