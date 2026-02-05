const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.innerText);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (
    (key >= "0" && key <= "9") ||
    ["+", "-", "*", "/", ".", "%"].includes(key)
  ) {
    handleInput(key);
  }

  if (key === "Enter" || key === "=") {
    e.preventDefault();
    handleInput("=");
  }

  if (key === "Backspace") {
    expression = expression.slice(0, -1);
    display.innerText = expression || "0";
  }

  if (key === "Escape") {
    handleInput("C");
  }
});

function handleInput(value) {
  if (value === "C") {
    expression = "";
    display.innerText = "0";
    return;
  }

  if (value === "=") {
    try {
      expression = eval(expression).toString();
      display.innerText = expression;
    } catch {
      display.innerText = "Error";
      expression = "";
    }
    return;
  }

  expression += value;
  display.innerText = expression;
}
