console.log(
  "Javascript Calculator Made by Dhruv Verma\nhttps://dhruvermafz.vercel.app/"
);

let flag = 0;

function isNumber(char) {
  return /^\d$/.test(char);
}

document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
let lastScreenValue = "";
let maxItems = 6;
let isSign = true;

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    handleButtonClick(buttonText);
  });
}

document.addEventListener("keydown", function (event) {
  const validKeys = "0123456789+-*/().";
  const key = event.key;

  if (validKeys.includes(key) || key === "Enter" || key === "Backspace") {
    if (key === "Enter") {
      handleButtonClick("=");
    } else if (key === "Backspace") {
      handleButtonClick("⌫");
    } else {
      handleButtonClick(key);
    }
  } else {
    alert("PLEASE INPUT VALID EXPRESSION");
  }
});

window.onerror = function () {
  alert("PLEASE INPUT VALID EXPRESSION");
  screenValue = "";
  screen.value = screenValue;
  screen.classList.remove("negative"); // Remove negative class
  console.clear();
};

function handleButtonClick(buttonText) {
  if (buttonText == "X" && !isSign) {
    if (flag == 1) {
      flag = 0;
    }
    buttonText = "*";
    isSign = true;
    screenValue += buttonText;
    screen.value = screenValue;
  } else if (buttonText == "C") {
    if (flag == 1) {
      flag = 0;
    }
    screenValue = "";
    screen.value = screenValue;
    screen.classList.remove("negative"); // Remove negative class
    isSign = true;
  } else if (buttonText == "=") {
    checkForBracketMulti();
    if (parseFloat(screen.value) < 0) {
      screen.classList.add("negative");
    } else {
      screen.classList.remove("negative");
    }
  } else if (buttonText == "(" || buttonText == ")") {
    if (flag == 1) {
      flag = 0;
    }
    screenValue += buttonText;
    screen.value = screenValue;
  } else if (isNumber(buttonText) || buttonText == ".") {
    if (flag == 1) {
      screenValue = buttonText;
      flag = 0;
    } else {
      screenValue += buttonText;
    }
    screen.value = screenValue;
    isSign = false;
    screen.classList.remove("negative"); // Remove negative class
  } else if (buttonText == "⌫") {
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
    isSign = false;
    screen.classList.remove("negative"); // Remove negative class
  } else {
    if (flag == 1) {
      flag = 0;
    }
    if (!isSign) {
      screenValue += buttonText;
      screen.value = screenValue;
      isSign = true;
    }
    screen.classList.remove("negative"); // Remove negative class
  }
}

function checkForBracketMulti() {
  // Assuming this function handles multiplication with brackets correctly
  try {
    if (eval(screenValue) !== undefined) {
      screen.value = eval(screenValue);
      lastScreenValue = screenValue;
      screenValue = screen.value;
      if (parseFloat(screen.value) < 0) {
        screen.classList.add("negative");
      } else {
        screen.classList.remove("negative");
      }
    }
  } catch (error) {
    window.onerror();
  }
  flag = 1;
}

function clearAll() {
  screenValue = "";
  screen.value = screenValue;
  screen.classList.remove("negative"); // Remove negative class
  isSign = true;
}

function deleteLastEntry() {
  screenValue = screenValue.slice(0, -1);
  screen.value = screenValue;
  screen.classList.remove("negative"); // Remove negative class
  isSign = false;
}
