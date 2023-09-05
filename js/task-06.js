const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const value = this.value;
  const length = this.getAttribute("data-length");

  if (value.length == length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
