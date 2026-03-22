import './style.css';
import { Calculator } from './calculator';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandElement = document.getElementById('previous-operand')!;
const currentOperandElement = document.getElementById('current-operand')!;

const calculator = new Calculator(previousOperandElement, currentOperandElement);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
  });
});

equalsButton?.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton?.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton?.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

// Keyboard Support
window.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    calculator.appendNumber(e.key);
  } else if (e.key === '.') {
    calculator.appendNumber('.');
  } else if (e.key === '=' || e.key === 'Enter') {
    calculator.compute();
  } else if (e.key === 'Backspace') {
    calculator.delete();
  } else if (e.key === 'Escape') {
    calculator.clear();
  } else if (e.key === '+') {
    calculator.chooseOperation('+');
  } else if (e.key === '-') {
    calculator.chooseOperation('-');
  } else if (e.key === '*' || e.key === 'x') {
    calculator.chooseOperation('×');
  } else if (e.key === '/') {
    calculator.chooseOperation('÷');
  }
  calculator.updateDisplay();
});
