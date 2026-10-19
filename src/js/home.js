console.log("hii");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

const navRight = document.querySelector("#nav-right");

openBtn.addEventListener("click", () => {
  navRight.classList.remove("hidden");
  openBtn.classList.add("hidden");
  navRight.classList.add("flex");
  navRight.classList.add("flex-col");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("block");
  closeBtn.classList.add("z-9999");
});

closeBtn.addEventListener("click", () => {
  navRight.classList.add("hidden");
  navRight.classList.remove("flex");
  navRight.classList.remove("flex-col");
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
  openBtn.classList.add("block");
});
