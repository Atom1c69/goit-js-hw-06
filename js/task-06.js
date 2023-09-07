function setValidationClasses(input, isValid) {
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
}

const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const value = this.value;
  const length = Number(this.getAttribute("data-length"));

  const isValid = value.length === length;
  setValidationClasses(this, isValid);
});
