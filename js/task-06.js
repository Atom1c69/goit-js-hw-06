function setValidationClasses(input, isValid) {
  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const value = this.value;
  const length = Number(this.getAttribute("data-length"));

  const isValid = value.length === length;
  setValidationClasses(this, isValid);
});
