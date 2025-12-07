// Task 2: Simple Calculator

// Arithmetic functions
function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  // Handle divide by zero gracefully
  if (n2 === 0) return '∞'; // or 'Error'
  return n1 / n2;
}

// Helper: read inputs as numbers (fallback to 0)
function getInputs() {
  const n1 = parseFloat(document.getElementById('number1').value) || 0;
  const n2 = parseFloat(document.getElementById('number2').value) || 0;
  return { n1, n2 };
}

// Helper: render result
function showResult(value) {
  document.getElementById('calculation-result').textContent = value;
}

// Wire up buttons
document.getElementById('add').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(add(n1, n2));
});

document.getElementById('subtract').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(subtract(n1, n2));
});

document.getElementById('multiply').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(multiply(n1, n2));
});

document.getElementById('divide').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  showResult(divide(n1, n2));
});
