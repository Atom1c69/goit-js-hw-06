const rangeInput = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

rangeInput.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textSpan.style.fontSize = fontSize;
});
