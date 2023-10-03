let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((element) => {
  element.addEventListener("click", (button) => {
    if (button.target.innerText == "=") {
      if (string !== "") {
        string = String(eval(string));
        inputBox.value = string;
      }
    } else if (button.target.innerText == "AC") {
      string = "";
      inputBox.value = string;
    } else if (button.target.innerText == "DEL") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else if (button.target.id == "plusMinus") {
      string = String(-eval(string));
      inputBox.value = string;
    } else {
      const lastChar = string.charAt(string.length - 1);

      if (
        ["+", "-", "*", "/"].includes(lastChar) &&
        ["+", "-", "*", "/"].includes(button.target.innerText)
      ) {
        string =
          string.substring(0, string.length - 1) + button.target.innerText;
      } else {
        string += button.target.innerText;
      }

      inputBox.value = string;
    }
  });
});
