
// Open mobile navbar
const tBtn = document.getElementById("nav-toggler");
const mNav = document.getElementById("mobile-nav").querySelector("#sidebar");
const nOverlay = document.getElementsByClassName("mobile-nav-overlay")
tBtn.addEventListener("click", () => {
  nOverlay[0].classList.remove("d-none");
  nOverlay[0].classList.add("d-block");
  mNav.style.marginLeft = "0px";
});

// Close mobile navbar
nOverlay[0].addEventListener("click", (e) => {
  let ele = e.target;
  mNav.style.marginLeft = "-250px";
  ele.classList.remove("d-block");
  ele.classList.add("d-none")
})