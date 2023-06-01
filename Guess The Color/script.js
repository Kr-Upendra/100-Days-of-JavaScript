const colorValue = document.querySelector(".colorCode__value");
const colorBox1 = document.querySelector(".color__1");
const colorBox2 = document.querySelector(".color__2");
const colorBox3 = document.querySelector(".color__3");
const colorBox4 = document.querySelector(".color__4");
const colorBox5 = document.querySelector(".color__5");
const colorBox6 = document.querySelector(".color__6");

const generateRandomColor = () => {
  const colorLetters = "abcdef1234567890";
  let colorCode = "";
  for (let i = 0; i < 6; i++) {
    colorCode += colorLetters[Math.floor(Math.random() * colorLetters.length)];
  }
  return `#${colorCode}`;
};

const setBoxAndRandomColor = () => {
  const sameColor = generateRandomColor();
  const boxes = [
    colorBox1,
    colorBox2,
    colorBox3,
    colorBox4,
    colorBox5,
    colorBox6,
  ];
  const ranodmColorBox = boxes[Math.floor(Math.random() * boxes.length)];
  const getRandomColorBoxNumber = ranodmColorBox.className;
  ranodmColorBox.style.backgroundColor = sameColor;
  colorValue.innerHTML = sameColor;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].className === getRandomColorBoxNumber) {
      continue;
    } else {
      giveColorCode(boxes[i]);
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (e) => {
      const rgbColor = e.target.style.backgroundColor;
      const hexColor = convertRGBIntoHex(rgbColor);
      if (hexColor === sameColor) {
        alert("Congrets! You Guessed it.");
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        alert("Sorry Try Again!");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    });
  }
};

const giveColorCode = (item) => {
  item.style.backgroundColor = `${generateRandomColor()}`;
};

const convertRGBIntoHex = (rgbColor) => {
  const x = rgbColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  const red = x[1] * 1;
  const green = x[2] * 1;
  const blue = x[3] * 1;
  const hex = [red, green, blue]
    .map((v) => {
      const hexChar = v.toString(16);
      return hexChar.length == 1 ? "0" + hexChar : hexChar;
    })
    .join("");
  return "#" + hex;
};

setBoxAndRandomColor();
