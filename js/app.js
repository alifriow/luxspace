function addClass(e, classes) {
  e.classList.add(...classes.split(" "));
}

function removeClass(e, classes) {
  e.classList.remove(...classes.split(" "));
}

const menuTogglerId = document.getElementById("menu-toggler");
menuTogglerId.addEventListener("click", function () {
  const menuId = document.querySelector("#menu");
  const btnSvg = document.querySelector(".button-svg");
  if (menuId.classList.contains("translate-x-full")) {
    removeClass(menuId, "translate-x-full");
    addClass(menuId, "-translate-x-1/2");
    btnSvg.src = "../src/icon/close.svg";
  } else {
    removeClass(menuId, "-translate-x-full");
    addClass(menuId, "translate-x-full");
    btnSvg.src = "../src/icon/humberger.svg";
  }
});

const accordion = document.querySelectorAll(".accordion");
const menuDropdown = document.querySelectorAll(".menu-dropdown");
const btnDropdown = document.querySelectorAll(".btn-dropdown");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // alert(i);
    if (menuDropdown[i].classList.contains("h-0")) {
      // addClass(btnDropdown, "add");
      btnDropdown[i].classList.add("add");
      menuDropdown[i].classList.remove("h-0");
      menuDropdown[i].classList.add("h-auto");
      // alert(menuDropdown[i].classList.contains("h-0"));
    } else {
      btnDropdown[i].classList.remove("add");
      menuDropdown[i].classList.add("h-0");
      menuDropdown[i].classList.remove("h-auto");
    }
  });
}

// Shipping Details

let data = {
  name: "",
  email: "",
  address: "",
  number: "",
  courier: "",
  payment: "",
};

const inputs = document.querySelectorAll("#shipping-detail input");
for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];
  input.addEventListener("change", function (event) {
    data[event.target.id] = event.target.value;
    check();
  });
}

function check() {
  const find = Object.values(data).filter((item) => item === "");
  if (find.length === 0) {
    document.querySelector(
      "#shipping-detail button[type=submit]"
    ).disabled = true;
  } else {
    document.querySelector(
      "#shipping-detail button[type=submit]"
    ).disabled = false;
  }
}

//single page
const swipperrs = document.querySelectorAll(".swipperr");
const swipperrsImg = document.querySelectorAll(".swipperr img");
const reviewImg = document.querySelector(".review img");
for (let i = 0; i < swipperrs.length; i++) {
  swipperrs[i].addEventListener("click", function () {
    checkAll();
    swipperrs[i].classList.add("selected");
    // alert(swipperrsImg[i].src);
    reviewImg.src = swipperrsImg[i].src;
  });
}

function checkAll() {
  for (let i = 0; i < swipperrs.length; i++) {
    swipperrs[i].classList.remove("selected");
  }
}

// shopping cart
const items = document.querySelectorAll(".list-product");
// const btnRemoves = document.querySelectorAll(".btn-remove");
let angka = 4;

for (let i = 0; i < items.length; i++) {
  items[i].querySelector(".btn-remove").addEventListener("click", function () {
    items[i].remove();
    angka--;
    checkEmpty();
  });
}

function checkEmpty() {
  if (angka == 0) {
    document.querySelector(".shopping-cart").remove();
    document.querySelector("#cart-empty").classList.remove("hidden");
    document.querySelector("#cart-empty").classList.add("block");
  }
}
