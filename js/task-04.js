const counterValue = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let count = 0;

function updateCounter() {
  counterValue.textContent = count;
}

decrementButton.addEventListener("click", () => {
  count -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  count += 1;
  updateCounter();
});
