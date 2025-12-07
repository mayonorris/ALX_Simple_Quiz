// Task 1: Simple Interactive Quiz

function checkAnswer() {
  const correctAnswer = "4";

  // Get selected radio
  const selected = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selected ? selected.value : "";

  // Update feedback text
  const feedback = document.getElementById('feedback');
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Wire the button click to checkAnswer (do not call it here)
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
