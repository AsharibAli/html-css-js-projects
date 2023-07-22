const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// 1. `const search = document.querySelector(".search");`: This line selects the first element in the HTML document that has a class of "search" and assigns it to the variable `search`. It uses the `document.querySelector` method to select the element.

// 2. `const btn = document.querySelector(".btn");`: This line selects the first element in the HTML document that has a class of "btn" and assigns it to the variable `btn`.

// 3. `const input = document.querySelector(".input");`: This line selects the first element in the HTML document that has a class of "input" and assigns it to the variable `input`.

// 4. `btn.addEventListener("click", () => { ... });`: This line adds an event listener to the `btn` element for the "click" event. When the button is clicked, the code inside the arrow function `{ }` will be executed.

// 5. `search.classList.toggle("active");`: This line toggles the presence of the "active" class on the `search` element. If the class is not present, it adds it; if it is present, it removes it.

// 6. `input.focus();`: This line sets the focus (cursor) on the `input` element. So when the button is clicked, the `input` element will be focused, allowing the user to start typing immediately.

// Overall, this code sets up an event listener on a button. When the button is clicked, it toggles the "active" class on a search element and sets focus on an input element.
