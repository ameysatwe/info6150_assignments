const validate = () => {
  validateRadioButtons();
  validateFirstName();
  validateLastName();
  checkSubmitBtn();
};

const checkSubmitBtn = () => {
  if (validateFlag === true) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
};

let radioButtons = document.querySelectorAll("input[type=radio]");
let validateFlag = false;
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

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", validate);
});

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

document.getElementById("firstName").addEventListener("input", validate);

document.getElementById("lastName").addEventListener("input", validate);
