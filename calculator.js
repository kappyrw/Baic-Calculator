let firstNumber = '';
let operator = '';
let secondNumber = '';

function updateDisplay(value) {
  document.getElementById('display').value = value;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error: Invalid operator';
  }
}

document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', () => {
    const digit = button.textContent;
    updateDisplay(firstNumber + operator + secondNumber + digit);
    if (!operator) {
      firstNumber += digit;
    } else {
      secondNumber += digit;
    }
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    const selectedOperator = button.textContent;
    updateDisplay(firstNumber + selectedOperator);
    operator = selectedOperator;
  });
});

document.querySelector('.equals').addEventListener('click', () => {
  const result = operate(operator, firstNumber, secondNumber);  
  updateDisplay(result);
  firstNumber = result.toString();
  operator = '';
  secondNumber = '';
});

document.querySelector('.clear').addEventListener('click', () => {
  updateDisplay('');
  firstNumber = '';
  operator = '';
  secondNumber = '';
});
