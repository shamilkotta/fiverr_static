
// Open mobile navbar
const tBtn = document.getElementById("nav-toggler");
const mNav = document.getElementById("mobile-nav").querySelector("#sidebar");
const nOverlay = document.getElementsByClassName("mobile-nav-overlay");
const topNav = document.getElementById("top-nav");
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

// Change topnav bg color on scroll
const logoBlack = document.getElementsByClassName("nav-logo-black")[0];
const logoWhite = document.getElementsByClassName("nav-logo-white")[0];
const optionsNav = document.getElementById("nav-options");
const child = [...topNav.children[0].children]
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // changing text color
    child.map((nod, i) => {
      if (i == 4) {
        nod.classList.add("join-btn-second");
        nod.classList.remove("border-white");
      } else nod.classList.add("text-black");
      nod.classList.remove("text-white");
    })
    // changing bg color
    topNav.classList.add("bg-white");
    // changing logo
    logoWhite.classList.remove("d-block")
    logoWhite.classList.add("d-none")
    logoBlack.classList.add("d-block")
    logoBlack.classList.remove("d-none")

    //Adding options bar on scroll 
    optionsNav.classList.add("d-sm-flex");
  } else {
    // changin bg color
    topNav.classList.remove("bg-white");
    // changing text color
    child.map((nod, i) => {
      if (i == 4) {
        nod.classList.remove("join-btn-second");
        nod.classList.add("border-white");
      } else nod.classList.remove("text-black");
      nod.classList.add("text-white");
    })
    // changing logo
    logoWhite.classList.remove("d-none")
    logoWhite.classList.add("d-block")
    logoBlack.classList.add("d-none")
    logoBlack.classList.remove("d-block")

    //Removing options bar on scroll 
    optionsNav.classList.remove("d-sm-flex");
  }
})

// Our clients 
const clientParent = document.getElementById("clients-container");
const clientDivNode = document.createElement("div");
clientDivNode.className = "clients-container d-flex justify-content-between align-center flex-wrap mx-auto py-2";
clientDivNode.style.width = "50%"
clients.map((ele) => {
  const childNode = document.createElement("img");
  childNode.src = ele.url;
  childNode.alt = ele.alt;
  childNode.className = "mx-2";
  clientDivNode.appendChild(childNode);
})
clientParent.appendChild(clientDivNode);

// Explore
const exploreParent = document.getElementById("explore");
const exploreDivNode = document.createElement("div");
exploreDivNode.className = "content-wrapper my-4 mx-auto d-flex flex-wrap justify-content-start";
exploreDivNode.style.flex = "1 1 0";
explore.map(ele => {
  const childNode = document.createElement("a");
  childNode.href = "#", childNode.className = "my-4 text-black d-flex flex-column align-items-center";
  childNode.style.width = "200px", childNode.style.gap = "15px"
  let imgNode = document.createElement("img");
  imgNode.src = ele.url, imgNode.alt = ele.alt;
  imgNode.style.width = "48px", imgNode.style.height = "48px"
  childNode.appendChild(imgNode);
  let txtNode = document.createTextNode(ele.alt);
  childNode.appendChild(txtNode);
  exploreDivNode.appendChild(childNode);
})
exploreParent.appendChild(exploreDivNode);

// Popular services
const servParent = document.getElementById("services-slider-wrapper");
const servDivNode = document.createElement("div");
servDivNode.className = "row d-flex flex-nowrap";
servDivNode.style.gap = "8px"
services.map(ele => {
  const childNode = document.createElement("div");
  const mt = document.createElement("p");
  mt.innerHTML = ele.moto;
  const hd = document.createElement("h2");
  mt.style.margin = 0, mt.style.padding = 0;
  hd.innerHTML = ele.head
  childNode.appendChild(mt)
  childNode.appendChild(hd)
  childNode.className = "col-12 col-sm-6 col-md-4 col-lg-3 text-white pt-3"
  childNode.style.backgroundRepeat = "no-repeat";
  childNode.style.backgroundImage = `url(${ele.url})`;
  childNode.style.height = "350px";
  childNode.style.borderRadius = "5px";
  childNode.style.backgroundSize = "cover";
  childNode.style.backgroundPosition = "center"
  servDivNode.appendChild(childNode);
})
servParent.appendChild(servDivNode);
//scroll services
const servLeft = document.getElementById("slider-left-arrow");
const servRight = document.getElementById("slider-right-arrow");
servRight.addEventListener("click", () => {
  const width = servParent.offsetWidth;
  const current = servParent.scrollLeft;
  servParent.scrollTo(current + width, 0)
})

servLeft.addEventListener("click", () => {
  const width = servParent.offsetWidth;
  const current = servParent.scrollLeft;
  servParent.scrollTo(current - width, 0)
})
