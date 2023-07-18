"use strict";

// --- FORM --- //
const form = document.querySelector("form");
const input = document.querySelectorAll("input");

// --- INPUT FIELDS --- //
const fullName = document.getElementById("full-name");
const cardNum = document.getElementById("card-number");
const expMonth = document.getElementById("card-expiry--mm");
const expYear = document.getElementById("card-expiry--yy");
const pin = document.getElementById("card-pin");

// --- DISPLAY CARD --- //
const cardName = document.getElementById("card--name");
const cardLongNum = document.getElementById("long--card--num");
const cardExpMonth = document.getElementById("exp--mm");
const cardExpYear = document.getElementById("exp--yy");
const cardPin = document.getElementById("card--pin");

// --- CHECKING SUBMIT --- //
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputForm = document.querySelector(".input-form");
  const formComplete = document.querySelector(".form-complete");

  let isNameValid = checkFullName(),
    isCardNumValid = checkCardNum(),
    isMonthValid = checkExpMonth(),
    isYearValid = checkExpYear(),
    isPinValid = checkPin();

  let isFormValid =
    isNameValid && isCardNumValid && isMonthValid && isYearValid && isPinValid;

  if (isFormValid) {
    formComplete.classList.remove("hide");
    inputForm.classList.add("hide");
  }
});

// --- DISPLAYING INPUTS --- //
form.addEventListener("input", () => {
  displayName();
  displayNumber();
  displayMonth();
  displayYear();
  displayPin();
});

// --- DISPLAYING INPUTS FUNCTION --- //
function displayName() {
  cardName.textContent = fullName.value;
  if (cardName.value === "") {
    cardName.textContent = "Jane Appleseed";
  }
}

function displayNumber() {
  cardLongNum.textContent = cardNum.value.replace(/(.{4})/g, "$1 ");
  if (cardNum.value === "") {
    cardLongNum.textContent = "0000 0000 0000 0000";
  }
}

function displayMonth() {
  cardExpMonth.textContent = expMonth.value;
  if (expMonth.value === "") {
    cardExpMonth.textContent = "00";
  }
}

function displayYear() {
  cardExpYear.textContent = expYear.value;
  if (expYear.value === "") {
    cardExpYear.textContent = "00";
  }
}

function displayPin() {
  cardPin.textContent = pin.value;
  if (pin.value === "") {
    cardPin.textContent = "000";
  }
}

// --- IS FORM VALID FUNCTION --- //
const isRequired = (value) => (value === "" ? false : true);

function checkFullName() {
  let valid = false;

  const fullNameValue = fullName.value.trim();

  if (!isRequired(fullNameValue)) {
    invalid(fullName, "Can't be left blank");
  } else {
    valid = true;
  }
  return valid;
}

function checkCardNum() {
  let valid = false;

  const cardNumValue = cardNum.value;

  if (!isRequired(cardNumValue)) {
    invalid(cardNum, "Can't be left blank");
  } else if (isNaN(cardNumValue)) {
    invalid(cardNum, "Wrong format, numbers only");
  } else if (cardNumValue.length !== 16) {
    invalid(cardNum, "Must contain 16 digits");
  } else {
    valid = true;
  }

  return valid;
}

function checkExpMonth() {
  let valid = false;

  const expMonthValue = expMonth.value;

  if (!isRequired(expMonthValue)) {
    invalid(expMonth, "Can't be left blank");
  } else if (isNaN(expMonthValue)) {
    invalid(expMonth, "Wrong format, numbers only");
  } else if (expMonthValue.length !== 2) {
    invalid(expMonth, "Must contain 2 digits");
  } else {
    valid = true;
  }

  return valid;
}

function checkExpYear() {
  let valid = false;

  const expYearValue = expYear.value;

  if (!isRequired(expYearValue)) {
    invalid(expYear, "Can't be left blank");
  } else if (isNaN(expYearValue)) {
    invalid(expYear, "Wrong format, numbers only");
  } else if (expYearValue.length !== 2) {
    invalid(expYear, "Must contain 2 digits");
  } else {
    valid = true;
  }

  return valid;
}

function checkPin() {
  let valid = false;

  const pinValue = pin.value;

  if (!isRequired(pinValue)) {
    invalid(pin, "Can't be left blank");
  } else if (isNaN(pinValue)) {
    invalid(pin, "Wrong format, numbers only");
  } else if (pinValue.length !== 3) {
    invalid(pin, "Must contain 3 digits");
  } else {
    valid = true;
  }

  return valid;
}

function invalid(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("error");
  small.innerText = message;
}
