$(document).ready(() => {
  const username = localStorage.getItem("username");
  $("#usernameDisplay").text(username);

  const validateNumber = (number, errorElement) => {
    let valid = true;
    if (isNaN(number)) {
      $(errorElement).text("Please enter a valid number.");
      valid = false;
    } else {
      $(errorElement).text("");
    }
    return valid;
  };

  const calculate = (operation) => {
    const number1 = parseFloat($("#number1").val());
    const number2 = parseFloat($("#number2").val());

    let valid =
      validateNumber(number1, "#number1Error") &&
      validateNumber(number2, "#number2Error");
    if (!valid) return;

    let result;
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        result = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
    }

    $("#result").text(result);
  };

  // Attach click handlers to each button
  $("#addBtn").on("click", () => calculate("add"));
  $("#subtractBtn").on("click", () => calculate("subtract"));
  $("#multiplyBtn").on("click", () => calculate("multiply"));
  $("#divideBtn").on("click", () => calculate("divide"));
});
