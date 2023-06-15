const menuIcon = document.querySelector(".navbar__bars");
const navigation = document.querySelector(".navbar__links");
const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");

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

let slideIndex = 1;

function slideRecipes(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

slideRecipes(slideIndex);

function plusSlide(n) {
  console.log("Hello");
  slideRecipes((slideIndex += n));
}
