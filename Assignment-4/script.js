const validate = () => {
  validateRadioButtons();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();
  validateZip();
  checkSubmitBtn();
};

const checkSubmitBtn = () => {
  console.log("flag" + validateFlag);
  //   if (validateFlag === true) {
  //     document.getElementById("submit").disabled = false;
  //   } else {
  //     document.getElementById("submit").disabled = true;
  //   }
};

let radioButtons = document.querySelectorAll("input[type=radio]");
const validateRadioButtons = () => {
  console.log(radioButtons);
  if (
    radioButtons[0].checked ||
    radioButtons[1].checked ||
    radioButtons[2].checked
  ) {
    document.getElementById("radioError").style.display = "none";
    validateFlag = true;
  } else {
    document.getElementById("radioError").style.display = "block";
    validateFlag = false;
  }
};

const validateFirstName = () => {
  let firstName = document.getElementById("firstName");

  if (validateInput(firstName.value) === false) {
    document.getElementById("fNameError").style.display = "block";
    validateFlag = false;
  } else {
    document.getElementById("fNameError").style.display = "none";
    validateFlag = true;
  }
};

const validateLastName = () => {
  let lastName = document.getElementById("lastName");

  if (validateInput(lastName.value) === false) {
    document.getElementById("lNameError").style.display = "block";
    validateFlag = false;
  } else {
    document.getElementById("lNameError").style.display = "none";
    validateFlag = true;
  }
};

function validateInput(input) {
  const regex = /^[A-Za-z]{3,15}$/;
  return regex.test(input);
}

const validateEmail = () => {
  let email = document.getElementById("emailId");
  if (validateNortheasternEmail(email.value) === false) {
    document.getElementById("emailError").style.display = "block";
    validateFlag = false;
  } else {
    document.getElementById("emailError").style.display = "none";
    validateFlag = true;
  }
};
const validateNortheasternEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
  return regex.test(email);
};

const validatePhone = () => {
  let phone = document.getElementById("phoneNumber");
  if (validatePhoneNumber(phone.value) === false) {
    document.getElementById("phoneError").style.display = "block";
    validateFlag = false;
  } else {
    document.getElementById("phoneError").style.display = "none";
    validateFlag = true;
  }
};

const validatePhoneNumber = (phone) => {
  const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
  return regExPhone.test(phone);
};

const validateZip = () => {
  let zip = document.getElementById("zipcode");
  if (validateZipRegex(zip.value) === false) {
    document.getElementById("zipError").style.display = "block";
    validateFlag = false;
  } else {
    document.getElementById("zipError").style.display = "none";
    validateFlag = true;
  }
};

const validateZipRegex = (zip) => {
  const regExZip = /^\d{5}$/;
  return regExZip.test(zip);
};

document.getElementById("emailId").addEventListener("input", validate);
document.getElementById("firstName").addEventListener("input", validate);
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", validate);
});
document.getElementById("lastName").addEventListener("input", validate);

document.getElementById("phoneNumber").addEventListener("input", validate);

document.getElementById("zipcode").addEventListener("input", validate);
