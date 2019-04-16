'use strict';

function handleStartQuiz() {
    // The starting screen should have a button that users can click to start the quiz
    // The results screen should have a button that users can click to start quiz
    // Upon starting quiz, current question is set to index 0
    // Upon clicking start quiz, the welcome screen/results screen is hidden
    // Upon clicking start quiz, the quiz is display beginning with the first question
    $(".js-start-quiz").on("click", function(event) {
        console.log("`handleStartQuiz` ran");
    });
}

// WILL NEED SOMETHING TO HOLD CURRENT QUESTION

function handleRenderQuiz() {
    // This function displays the current question and choices
    // Users should also be able to see which question they're on (for instance, "7 out of 10")
    // Users should also be able to see their current score ("5 correct, 2 incorrect")
    // Users should be shown a submit button

    console.log("`handleRenderQuiz` ran");
}

// WILL NEED SOMETHING TO HOLD CURRENT SCORE

function handleSubmitAnswer() {
    // Upon submitting a correct answer the score is incremented by 1
    // Upon submitting an incorrect answer the score is unchanged
    // Upon clicking submit the quiz is hidden and answer is rendered

    console.log("`handleSubmitAnswer` ran");
}

function handleIsAnswerTrueOrFalse () {
    // Upon submitting an answer, this function checks whether answer is correct and returns a value of true or false

    console.log("`handleIsAnswerTrueOrFalse` ran");
}

function handleRenderAnswer() {
    // If answer is false, text feedback will display incorrect
    // If answer is true, text feedback will display correct
    // Whether true or false, a text explanation of the correct answer is shown
    // Whether whether true or false, users will be shown a button to move onto the next question

    console.log("`handleRenderAnswer` ran");
}

function handleClickNextQuestion() {
    // Upon clicking the next button current question is incremented by 1 
    // Upon clicking the next button answer is hidden and quiz is displayed 

    console.log("`handleClickNextQuestion` ran");
}

function handleRenderResults() {
    // Upon reaching the end of the quiz the quiz is hidden and results screen is shown
    // Users should be shown their current score
    // Depending on the users score range, text feedback is shown
    // Users should be shown a button to restart the quiz

    console.log("`handleRenderResults` ran");
}

function handleQuiz() {
    handleStartQuiz();
}

$(handleQuiz);