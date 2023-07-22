const insert = document.getElementById("insert"); // This assigns the element with the id "insert" to the variable "insert"

window.addEventListener("keydown", (event) => {
  // This adds an event listener to the window object for the "keydown" event and executes the provided callback function when the event is triggered
  insert.innerHTML = ` // This sets the HTML content of the "insert" element
    <div class="key">
      ${
        event.key === " " ? "Space" : event.key
      } // This checks if the pressed key is a space character and displays "Space" if it is, otherwise displays the actual key value
      <small>event.key</small> // This displays the text "event.key"
    </div>

    <div class="key">
      ${event.keyCode} // This displays the keyCode value of the pressed key
      <small>event.keyCode</small> // This displays the text "event.keyCode"
    </div>

    <div class="key">
      ${event.code} // This displays the code value of the pressed key
      <small>event.code</small> // This displays the text "event.code"
    </div>
  `;
});
