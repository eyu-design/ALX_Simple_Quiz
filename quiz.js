<script>
  // Step 1: Define the function
  function checkAnswer() {
    // Step 2: Set correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option was selected
    if (!selectedOption) {
      document.getElementById("feedback").textContent = "Please select an answer.";
      return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare answers and give feedback
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }

 const submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener("click", checkAnswer);
