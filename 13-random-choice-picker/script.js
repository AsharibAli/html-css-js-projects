const tagsEl = document.getElementById("tags"); // Get the element with the ID "tags"
const textarea = document.getElementById("textarea"); // Get the element with the ID "textarea"

textarea.focus(); // Set the focus to the textarea element

textarea.addEventListener("keyup", (e) => {
  // Add an event listener for keyup events on the textarea
  createTags(e.target.value); // Call the createTags function with the value of the textarea as the input

  if (e.key === "Enter") {
    // If the Enter key is pressed
    setTimeout(() => {
      e.target.value = ""; // Clear the value of the textarea after a delay of 10 milliseconds
    }, 10);

    randomSelect(); // Call the randomSelect function
  }
});

function createTags(input) {
  const tags = input // Split the input into an array of tags by comma
    .split(",")
    .filter((tag) => tag.trim() !== "") // Remove empty tags and trim any leading/trailing whitespace
    .map((tag) => tag.trim());

  tagsEl.innerHTML = ""; // Clear the inner HTML of the tags element

  tags.forEach((tag) => {
    // For each tag in the array
    const tagEl = document.createElement("span"); // Create a new span element
    tagEl.classList.add("tag"); // Add the class "tag" to the span element
    tagEl.innerText = tag; // Set the text of the span element to the tag
    tagsEl.appendChild(tagEl); // Append the span element to the tags element
  });
}

function randomSelect() {
  const times = 30; // Number of times to highlight a random tag

  const interval = setInterval(() => {
    // Execute the following code every 100 milliseconds
    const randomTag = pickRandomTag(); // Select a random tag

    if (randomTag !== undefined) {
      // If a tag is selected
      highlightTag(randomTag); // Highlight the tag

      setTimeout(() => {
        unHighlightTag(randomTag); // Remove the highlight from the tag after a delay of 100 milliseconds
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval); // Stop the interval after a delay of times * 100 milliseconds

    setTimeout(() => {
      const randomTag = pickRandomTag(); // Select a random tag

      highlightTag(randomTag); // Highlight the tag
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag"); // Get all elements with the class "tag"
  return tags[Math.floor(Math.random() * tags.length)]; // Return a random tag from the array of tags
}

function highlightTag(tag) {
  tag.classList.add("highlight"); // Add the class "highlight" to the tag
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight"); // Remove the class "highlight" from the tag
}
