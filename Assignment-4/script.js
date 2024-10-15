const validate = () => {
  validateRadioButtons();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();
  validateZip();
  validateCheckboxes();
  validateCustomTextArea();
  validateAddress();
  validateComments();
  checkSubmitBtn();
};

const checkSubmitBtn = () => {
  const isRadioValid = validateRadioButtons();
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isZipValid = validateZip();
  const isCheckBoxValid = validateCheckboxes();
  //   const isCustomTextareaValid = validateCustomTextArea();
  const isAddressValid = validateAddress();
  const isCommentsValid = validateComments();
  const isSelectionValid = selections.value !== "";
  const customTextAreaValid = customTextarea.value.length > 5;

  const validateFlag = customCheckbox.checked
    ? isRadioValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isCheckBoxValid &&
      isAddressValid &&
      isCommentsValid &&
      isSelectionValid &&
      customTextAreaValid &&
      isZipValid
    : isRadioValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isCheckBoxValid &&
      isAddressValid &&
      isCommentsValid &&
      isSelectionValid &&
      isZipValid;
  console.log(validateFlag);
  if (validateFlag !== true) {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
};

let radioButtons = document.querySelectorAll("input[type=radio]");
const validateRadioButtons = () => {
  if (
    radioButtons[0].checked ||
    radioButtons[1].checked ||
    radioButtons[2].checked
  ) {
    document.getElementById("radioError").style.display = "none";
    return true;
  } else {
    document.getElementById("radioError").style.display = "block";
    return false;
  }
  checkSubmitBtn();
};

const validateFirstName = () => {
  let firstName = document.getElementById("firstName");

  if (validateInput(firstName.value) === false) {
    document.getElementById("fNameError").style.display = "block";
    return false;
  } else {
    document.getElementById("fNameError").style.display = "none";
    return true;
  }
  checkSubmitBtn();
};

const validateLastName = () => {
  let lastName = document.getElementById("lastName");

  if (validateInput(lastName.value) === false) {
    document.getElementById("lNameError").style.display = "block";
    return false;
  } else {
    document.getElementById("lNameError").style.display = "none";
    return true;
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
    return false;
  } else {
    document.getElementById("emailError").style.display = "none";
    return true;
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
    return false;
  } else {
    document.getElementById("phoneError").style.display = "none";
    return true;
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
    return false;
  } else {
    document.getElementById("zipError").style.display = "none";
    return true;
  }
};

const validateZipRegex = (zip) => {
  const regExZip = /^\d{5}$/;
  return regExZip.test(zip);
};

const validateCheckboxes = () => {
  let checkboxes = document.querySelectorAll("input[name=source]");
  for (let checkbox of checkboxes) {
    if (checkbox.checked === true) {
      document.getElementById("checkboxError").style.display = "none";
      return true;
    }
  }
  document.getElementById("checkboxError").style.display = "block";
  return false;
};

let selectionErrorDiv = document.getElementById("selectionError");
let selections = document.getElementById("selections");
const handleSelection = () => {
  let customDiv = document.getElementById("custom");

  customCheckbox.checked = false;
  customTextarea.value = "";
  customDiv.classList.add("hidden");
  textareaContainer.classList.add("hidden");

  if (selections.value === "") {
    customDiv.style.display = "none";
    selectionErrorDiv.style.display = "block";
    // return false;
  } else {
    updateCheckboxLabel(selections.value);
    customDiv.style.display = "block";
    selectionErrorDiv.style.display = "none";
    // return true;
  }
  checkSubmitBtn();
};

const updateCheckboxLabel = (selection) => {
  let checkboxLabel = document.getElementById("customLabel");
  checkboxLabel.textContent = `${selection} Large 1$:`;
};

document.getElementById("emailId").addEventListener("input", validate);
document.getElementById("firstName").addEventListener("input", validate);
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", validate);
});
document.getElementById("lastName").addEventListener("input", validate);

document.getElementById("phoneNumber").addEventListener("input", validate);

document.getElementById("zipcode").addEventListener("input", validate);
document.querySelectorAll("input[name=source]").forEach((checkbox) => {
  checkbox.addEventListener("click", validate);
});

let customTextarea = document.getElementById("customTextArea");
const customCheckboxValidate = () => {
  if (customCheckbox.checked) {
    textareaContainer.classList.remove("hidden");
    // return true;
  } else {
    textareaContainer.classList.add("hidden");
    customTextarea.value = "";
    // return false;
  }
  checkSubmitBtn();
};
let customCheckbox = document.getElementById("customCheckbox");
customCheckbox.addEventListener("change", customCheckboxValidate);

const validateCustomTextArea = () => {
  if (customTextarea.value.length <= 5) {
    document.getElementById("customTextError").style.display = "block";
    return false;
  } else if (!customTextarea.classList.contains("hidden")) {
    document.getElementById("customTextError").style.display = "none";
    return true;
  }
};
const validateAddress = () => {
  let address = document.getElementById("address");
  if (address.value.length < 5) {
    document.getElementById("addressError").style.display = "block";
    return false;
  } else {
    document.getElementById("addressError").style.display = "none";
    return true;
  }
};

const validateComments = () => {
  let comments = document.getElementById("comments");
  if (comments.value.length < 5) {
    document.getElementById("commentsError").style.display = "block";
    return false;
  } else {
    document.getElementById("commentsError").style.display = "none";
    return true;
  }
};
document
  .getElementById("selections")
  .addEventListener("change", handleSelection);
document.getElementById("customTextArea").addEventListener("input", validate);

document.getElementById("address").addEventListener("input", validate);
document.getElementById("comments").addEventListener("input", validate);
document.getElementById("submit").addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("tablediv").classList.remove("hidden");
  let table = document.getElementById("resultTableData");
  let tbody = table.getElementsByTagName("tbody")[0];
  let title = document.querySelector("input[name=title]:checked").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("emailId").value;
  let phone = document.getElementById("phoneNumber").value;
  let address = document.getElementById("address").value;
  let address2 = document.getElementById("address2").value;
  let zip = document.getElementById("zipcode").value;
  let comments = document.getElementById("comments").value;
  const checkboxes = document.querySelectorAll('input[name="source"]:checked');

  // Get the values of all checked checkboxes
  const selectedValues = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );

  let row = tbody.insertRow();
  row.insertCell(0).textContent = title;
  row.insertCell(1).textContent = firstName;
  row.insertCell(2).textContent = lastName;
  row.insertCell(3).textContent = email;
  row.insertCell(4).textContent = phone;
  row.insertCell(5).textContent = address;
  row.insertCell(6).textContent = address2;
  row.insertCell(7).textContent = zip;
  row.insertCell(8).textContent = selections.value;
  row.insertCell(9).textContent = selectedValues.join(", ");
  row.insertCell(10).textContent = comments;
  row.insertCell(11).textContent = customTextarea.value;

  document.getElementById("form").reset();
}

checkSubmitBtn();
