const categories = document.querySelector("#categories");
const elem = categories.children;
const liElem = [...elem];
console.log(liElem);

console.log("Number of categories:", categories.children.length);

liElem.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
