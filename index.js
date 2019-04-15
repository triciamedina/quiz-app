function handleStartQuiz() {
    // The starting screen should have a button that users can click to start the quiz
    // The results screen should have a button that users can click to start quiz
    // Upon clicking start quiz, the welcome screen/results screen is hidden
    // Upon clicking start quiz, the quiz is display beginning with the first question
}

// WILL NEED SOMETHING TO HOLD CURRENT QUESTION

function handleRenderQuiz() {
    // This function displays the current question and choices
    // At the beginning of the quiz users should be show the first question (index 0)
    // Users should also be able to see which question they're on (for instance, "7 out of 10")
    // Users should also be able to see their current score ("5 correct, 2 incorrect").
}

// WILL NEED SOMETHING TO HOLD CURRENT SCORE

function handleSubmitAnswer() {
    // Upon clicking submit the quiz is hidden and answer is rendered
    // Upon submitting a correct answer the score is incremented by 1
    // Upon submitting an incorrect answer the score is unchanged
}

function handleIsAnswerTrueOrFalse () {
    // Upon submitting an answer, this function checks whether answer is correct and returns a value of true or false
}

function handleRenderAnswer() {
    // Upon submitting an incorrect answer text feedback will display incorrect
    // Upon submitting a correct answer text feedback will display correct
    // Whether incorrect or correct, a text explanation of the correct answer is shown
    // Whether incorrect or correct, users will be shown a button to move onto the next question
}

function handleClickNextQuestion() {
    // Upon clicking the next button quiz is displayed and user is shown the next question
}

function handleRenderResults() {
    // Upon reaching the end of the quiz the quiz is hidden and results screen is shown
    // Users should be shown their overall score at the end of the quiz
    // Users should be shown a button to restart the quiz
}

function handleQuiz() {
    // This function will be the callback when the page loads
    // It's responsible for activating the handleStartQuiz function
}