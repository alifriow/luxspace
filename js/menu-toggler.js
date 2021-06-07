import { addClass, removeClass } from "./utils-class";

const menuTogglerId = document.getElementById("menu-toggler");
menuTogglerId.addEventListener("click", function () {
  const menuId = document.querySelector("#menu");
  if (menuId.className.indexOf("invisible") > -1) {
    addClass(menuId, "visible opacity-100");
    removeClass(menuId, "invisible");
  }
});
