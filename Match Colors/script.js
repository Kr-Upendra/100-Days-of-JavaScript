const instructionBox = document.querySelector(".instructions");
const instructionIcon = document.querySelector(".icons");
const alert = document.querySelector(".alertbox");
const leftBox = document.querySelector(".left__box");
const rightBox = document.querySelector(".right__box");
const leftRedColorValue = document.querySelector(".leftRed");
const leftGreenColorValue = document.querySelector(".leftGreen");
const leftBlueColorValue = document.querySelector(".leftBlue");
const rightRedColorValue = document.querySelector(".rightRed");
const rightGreenColorValue = document.querySelector(".rightGreen");
const rightBlueColorValue = document.querySelector(".rightBlue");
const redIncrease = document.querySelector(".redIncrease");
const redDecrease = document.querySelector(".redDecrease");
const greenIncrease = document.querySelector(".greenIncrease");
const greenDncrease = document.querySelector(".greenDecrease");
const blueIncrease = document.querySelector(".blueIncrease");
const blueDncrease = document.querySelector(".blueDecrease");

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

const generateRGB = () => {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);
  return { red: red, green: green, blue: blue };
};

const setBgColor = () => {
  const leftRGB = generateRGB();
  const rightRGB = generateRGB();
  leftBox.style.backgroundColor = `rgb(${leftRGB.red}, ${leftRGB.green}, ${leftRGB.blue})`;
  rightBox.style.backgroundColor = `rgb(${rightRGB.red}, ${rightRGB.green}, ${rightRGB.blue})`;

  leftRedColorValue.value = leftRGB.red;
  leftGreenColorValue.value = leftRGB.green;
  leftBlueColorValue.value = leftRGB.blue;
  rightRedColorValue.value = rightRGB.red;
  rightGreenColorValue.value = rightRGB.green;
  rightBlueColorValue.value = rightRGB.blue;
};

setBgColor();

const increaseDecreaseValue = (r, g, b) => {
  redIncrease.addEventListener("click", () => {
    let redValue = parseInt(r.value);
    r.value = redValue + 1;
  });
  redDecrease.addEventListener("click", () => {
    let redValue = parseInt(r.value);
    r.value = redValue - 1;
  });
  greenIncrease.addEventListener("click", () => {
    let greenValue = parseInt(g.value);
    g.value = greenValue + 1;
  });
  greenDncrease.addEventListener("click", () => {
    let greenValue = parseInt(g.value);
    g.value = greenValue - 1;
  });
  blueIncrease.addEventListener("click", () => {
    let blueValue = parseInt(b.value);
    b.value = blueValue + 1;
  });
  blueDncrease.addEventListener("click", () => {
    let blueValue = parseInt(b.value);
    b.value = blueValue - 1;
  });
};
