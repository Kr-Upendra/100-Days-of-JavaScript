const instructionBox = document.querySelector(".instructions");
const instructionIcon = document.querySelector(".icons");
const alert = document.querySelector(".alertbox");
const leftBox = document.querySelector(".left__box");
const rightBox = document.querySelector(".right__box");

const toggleInstruction = () => {
  if (instructionBox.style.right === "-100%") {
    instructionBox.style.right = "3%";
  } else {
    instructionBox.style.right = "-100%";
  }
};

instructionIcon.addEventListener("click", toggleInstruction);

const callToggleBoxes = () => {
  leftBox.addEventListener("click", () => {
    leftBox.setAttribute("aria-selected", "true");
    rightBox.setAttribute("aria-selected", "false");
    showAlert("LEFT IS SELECTED🔥!", "3%");
    setTimeout(hideAlert, 4000);
  });

  rightBox.addEventListener("click", () => {
    rightBox.setAttribute("aria-selected", "true");
    leftBox.setAttribute("aria-selected", "false");
    showAlert("RIGHT IS SELECTED🔥!", "3%");
    setTimeout(hideAlert, 4000);
  });
};

callToggleBoxes();

const showAlert = (message, styleProp) => {
  alert.style.right = styleProp;
  alert.innerHTML = message;
};

const hideAlert = () => {
  alert.style.right = "-100%";
};
