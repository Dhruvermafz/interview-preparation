// Get DOM elements
let historyButton = document.getElementById("historybutton");
let history = document.getElementById("history");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let dis = document.getElementById("answer");

// Show history from localStorage
function showHistory() {
  let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
  let len = calcHistory.length;

  history.innerHTML = "";

  bar1.style.display = "block";
  bar2.style.display = "block";

  if (len === 0) {
    let historyItem = document.createElement("div");
    historyItem.innerHTML = "There's no history yet.";
    historyItem.className = "historyelement his";
    historyItem.style.fontSize = "25px";
    history.appendChild(historyItem);
  } else {
    for (let index = len - 1; index >= 0; index--) {
      const element = calcHistory[index];
      let historyItem = document.createElement("div");
      historyItem.className = "historyelement";
      historyItem.innerHTML = `${
        element.lastScreenValue
      } = <span style="color: ${element.result < 0 ? "red" : "green"}">${
        element.result
      }</span>`;
      history.appendChild(historyItem);
      if (index > 0) history.appendChild(document.createElement("hr"));
    }
  }
  history.style.display = "block";
}

// Add event listener to history button
historyButton.addEventListener("click", showHistory);

// Clear the display
function clearAll() {
  dis.value = "";
  screenValue = "";
}

// Hide history display
function hide() {
  history.style.display = "none";
  bar1.style.display = "none";
  bar2.style.display = "none";
}

// Delete the last entry from history
function deleteLastEntry() {
  let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
  if (calcHistory.length > 0) {
    calcHistory.pop();
    localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
    showHistory();
  }
}

// Add event listeners to bars to hide history
bar1.addEventListener("click", hide);
bar2.addEventListener("click", hide);

// Handle button clicks
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
    clearAll();
    screen.classList.remove("negative");
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
    screen.classList.remove("negative");
  } else if (buttonText == "⌫") {
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
    isSign = false;
    screen.classList.remove("negative");
  } else {
    if (flag == 1) {
      flag = 0;
    }
    if (!isSign) {
      screenValue += buttonText;
      screen.value = screenValue;
      isSign = true;
    }
    screen.classList.remove("negative");
  }
}

// Function to evaluate the expression and handle history
function checkForBracketMulti() {
  try {
    if (eval(screenValue) !== undefined) {
      lastScreenValue = screenValue;
      screen.value = eval(screenValue);
      let result = screen.value;
      screenValue = screen.value;
      if (parseFloat(screen.value) < 0) {
        screen.classList.add("negative");
      } else {
        screen.classList.remove("negative");
      }
      saveToHistory(lastScreenValue, result);
    }
  } catch (error) {
    window.onerror();
  }
  flag = 1;
}

// Save calculation to history
function saveToHistory(expression, result) {
  let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
  calcHistory.push({ lastScreenValue: expression, result: result });
  localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
}

window.onerror = function () {
  alert("PLEASE INPUT VALID EXPRESSION");
  clearAll();
  screen.classList.remove("negative");
  console.clear();
};
