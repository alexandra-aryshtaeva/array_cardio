let panels = document.querySelectorAll(".panel");

function toggleOPen() {
  this.classList.toggle("open");
}

panels.forEach((panel) => {
  panel.addEventListener("click", toggleOPen);
});

function toggleActive(e) {
  if (e.propertyName === "flex-grow") {
    console.log(e.propertyName);
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActive);
});
