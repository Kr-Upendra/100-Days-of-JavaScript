const menuIcon = document.querySelector(".navbar__bars");
const navigation = document.querySelector(".navbar__links");

menuIcon.addEventListener("click", () => {
  const attValue = menuIcon.getAttribute("data-menu");
  if (attValue === "false") {
    menuIcon.setAttribute("data-menu", "true");
    navigation.style.top = "15%";
  } else {
    menuIcon.setAttribute("data-menu", "false");
    navigation.style.top = "-100%";
  }
});
