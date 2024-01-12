let checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
let item = document.querySelectorAll(".item");

checkboxes.forEach((e) => {
  e.addEventListener("click", () => {
    item.classList.add.("checked");
    // item.classList.toggle("checked");
  });
});
console.log(checkboxes);
