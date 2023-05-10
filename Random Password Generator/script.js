const icon = document.querySelector(".fas");
const passwordInput = document.querySelector(".password__input");
const btn = document.querySelector(".btn");
const symbolInput = document.querySelector("#symbol");
const numberInput = document.querySelector("#numbers");
const alertBox = document.querySelector(".alert__box");
const alertMessage = document.querySelector(".alert__message");
const alertBtn = document.querySelector(".stop__btn");

const showAlertMessage = (message) => {
  alertBox.style.display = "block";
  alertMessage.innerHTML = message;
};

const hideAlertMessage = () => {
  alertBtn.addEventListener("click", () => {
    alertBox.style.display = "none";
  });
};

hideAlertMessage();

const changeIcon = () => {
  icon.addEventListener("click", () => {
    if (passwordInput.value.startsWith("Click")) {
      showAlertMessage("Please first generate password!");
    } else if (icon.className.startsWith("fas")) {
      icon.className = "fa-sharp fa-solid fa-circle-check";
      showAlertMessage("Password copied to clipboard!");
      copyPassword();
    } else {
      icon.className = "fas fa-clipboard";
    }
  });
};

changeIcon();

const copyPassword = async () => {
  try {
    passwordInput.select();
    await navigator.clipboard.writeText(passwordInput.value);
  } catch (err) {
    showAlertMessage(err.message);
  }
};

const generateRandoms = (arr, length) => {
  let result = "";
  for (let i = 0; i < length; i++)
    result += arr[Math.floor(Math.random() * arr.length)];
  return result;
};

const generatePassword = () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const specialChars = ["!", "@", "#", "$", "%", "&", "*"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const passwordLength = document.querySelector("#length").value;
  let generatedPassword = "";
  let symbols = "";
  let alpha = "";
  let nums = "";
  if (passwordLength * 1 === 8) {
    console.log("Password length is: ", passwordLength);
    if (symbolInput.checked && numberInput.checked) {
      symbols = generateRandoms(specialChars, 2);
      nums = generateRandoms(numbers, 2);
      alpha = generateRandoms(letters, 4);
      generatedPassword = symbols + alpha + nums;
    } else if (symbolInput.checked) {
      symbols = generateRandoms(specialChars, 3);
      alpha = generateRandoms(letters, 5);
      generatedPassword = symbols + alpha;
    } else if (numberInput.checked) {
      nums = generateRandoms(numbers, 3);
      alpha = generateRandoms(letters, 5);
      generatedPassword = alpha + nums;
    } else {
      alpha = generateRandoms(letters, 8);
      generatedPassword = alpha;
    }
  } else if (passwordLength * 1 === 12) {
    console.log("Password length is: ", passwordLength);
    if (symbolInput.checked && numberInput.checked) {
      symbols = generateRandoms(specialChars, 3);
      nums = generateRandoms(numbers, 2);
      alpha = generateRandoms(letters, 7);
      generatedPassword = symbols + alpha + nums;
    } else if (symbolInput.checked) {
      symbols = generateRandoms(specialChars, 4);
      alpha = generateRandoms(letters, 8);
      generatedPassword = symbols + alpha;
    } else if (numberInput.checked) {
      nums = generateRandoms(numbers, 5);
      alpha = generateRandoms(letters, 7);
      generatedPassword = alpha + nums;
    } else {
      alpha = generateRandoms(letters, 12);
      generatedPassword = alpha;
    }
  } else if (passwordLength * 1 === 16) {
    console.log("Password length is: ", passwordLength);
    if (symbolInput.checked && numberInput.checked) {
      symbols = generateRandoms(specialChars, 3);
      nums = generateRandoms(numbers, 4);
      alpha = generateRandoms(letters, 9);
      generatedPassword = symbols + alpha + nums;
    } else if (symbolInput.checked) {
      symbols = generateRandoms(specialChars, 5);
      alpha = generateRandoms(letters, 11);
      generatedPassword = symbols + alpha;
    } else if (numberInput.checked) {
      nums = generateRandoms(numbers, 4);
      alpha = generateRandoms(letters, 12);
      generatedPassword = alpha + nums;
    } else {
      alpha = generateRandoms(letters, 16);
      generatedPassword = alpha;
    }
  } else if (passwordLength * 1 === 20) {
    console.log("Password length is: ", passwordLength);
    if (symbolInput.checked && numberInput.checked) {
      symbols = generateRandoms(specialChars, 5);
      nums = generateRandoms(numbers, 4);
      alpha = generateRandoms(letters, 11);
      generatedPassword = symbols + alpha + nums;
    } else if (symbolInput.checked) {
      symbols = generateRandoms(specialChars, 6);
      alpha = generateRandoms(letters, 14);
      generatedPassword = symbols + alpha;
    } else if (numberInput.checked) {
      nums = generateRandoms(numbers, 5);
      alpha = generateRandoms(letters, 15);
      generatedPassword = alpha + nums;
    } else {
      alpha = generateRandoms(letters, 20);
      generatedPassword = alpha;
    }
  }

  const passwordArray = generatedPassword.split("");
  const shufflePassword = shuffleArrayElements(passwordArray);
  let newPassword = "";
  for (let i = 0; i < shufflePassword.length; i++)
    newPassword += shufflePassword[i];
  return newPassword;
};

const showPassword = () => {
  const password = generatePassword();
  passwordInput.value = password;
};

const handleGeneratorBtn = () => {
  btn.addEventListener("click", () => {
    if (icon.className.startsWith("fa")) icon.className = "fas fa-clipboard";
    showPassword();
  });
};

handleGeneratorBtn();

const shuffleArrayElements = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
