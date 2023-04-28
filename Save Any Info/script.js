const username = document.querySelector(".infoname");
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const profession = document.querySelector(".profession");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".submitbtn");
const searchUserInput = document.querySelector(".usersearchinput");
const searchUserBtn = document.querySelector(".search");
const showInfoBox = document.querySelector(".informationbox");
const getInfoBtn = document.querySelector(".getinfo");
const alertMessage = document.querySelector(".message");

const saveUsername = document.querySelector(".data-username");
const saveFirstname = document.querySelector(".data-firstname");
const saveLastname = document.querySelector(".data-lastname");
const saveAge = document.querySelector(".data-age");
const saveGender = document.querySelector(".data-gender");
const saveProfession = document.querySelector(".data-profession");
const saveMessage = document.querySelector(".data-message");
const closeBtn = document.querySelector(".closebtn");
const dataAlert = document.querySelector(".data-alert");
const showIDBox = document.querySelector(".showid");
const showIDBtn = document.querySelector(".seeids");

let ids = [];

const saveUserInformation = () => {
  const usernameValue = username.value;
  const firstnamevalue = firstname.value;
  const lastnameValue = lastname.value;
  const ageValue = parseInt(age.value);
  const genderValue = gender.value;
  const professionValue = profession.value;
  const messageValue = message.value;

  if (usernameValue.length < 1) {
    return alert("Please enter an ID!");
  }

  const getUserIdFromLocalStorage = localStorage.getItem(usernameValue);
  if (getUserIdFromLocalStorage) {
    return alert("ID already Exist! please use different!");
  }

  ids.push(usernameValue);

  const userInformation = {
    firstname: firstnamevalue,
    lastname: lastnameValue,
    age: ageValue,
    gender: genderValue,
    profession: professionValue,
    message: messageValue,
  };
  localStorage.setItem("ids", ids);
  localStorage.setItem(usernameValue, JSON.stringify(userInformation));
  username.value = "";
  firstname.value = "";
  lastname.value = "";
  age.value = "";
  gender.value = "";
  profession.value = "";
  message.value = "";
  alert("Information Saved 👍!");
};

submitBtn.addEventListener("click", saveUserInformation);

const getUserInformation = () => {
  const enteredUsername = searchUserInput.value;
  if (enteredUsername.length < 1 || enteredUsername === null) {
    return alert("Please enter username!");
  }
  const data = JSON.parse(localStorage.getItem(enteredUsername));
  if (data === null) {
    searchUserInput.value = "";
    return alert(
      "Sorry didn't find any information with that ID. Please try with another!"
    );
  } else {
    dataAlert.innerHTML = "Here is your data";
    saveUsername.textContent = enteredUsername;
    saveFirstname.textContent = data.firstname;
    saveLastname.textContent = data.lastname;
    saveAge.textContent = data.age;
    saveGender.textContent = data.gender;
    saveProfession.textContent = data.profession;
    saveMessage.textContent = data.message;
  }
};

searchUserBtn.addEventListener("click", getUserInformation);

const handleInfoBoxToggle = (btn, styleProp) => {
  btn.addEventListener("click", () => {
    showInfoBox.style.display = styleProp;
  });
};

handleInfoBoxToggle(getInfoBtn, "block"); // To show information box
handleInfoBoxToggle(closeBtn, "none"); // To close information box

const showIds = () => {
  showIDBtn.addEventListener("click", () => {
    if (showIDBox.style.display === "none") {
      const allIDS = localStorage.getItem("ids");
      showIDBox.innerHTML = allIDS;
      showIDBox.style.display = "block";
    } else {
      showIDBox.style.display = "none";
    }
  });
};
showIds(); // To close information box
