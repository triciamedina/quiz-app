'use strict';

// Hold question count and score count
let questionCount;
let scoreCount;

function handleStartQuiz() {

    $(".js-start-quiz").on("click", function(event) {
        
        // Upon starting quiz, questionCount and scoreCount are set to 0
        scoreCount = 0;
        questionCount = 0;

        // Hide current screen
        $(this).closest("section").addClass("js-hide");
        // Note – This also works: $(this).closest("section").hide();

        // Render quiz
        handleRenderQuiz();

        console.log("`handleStartQuiz` ran");
    });
}

function generateCurrentQuestion() {

    // Looks up current question and stores question and options HTML
    const currentQuestion = STORE[questionCount];
    return `<section class="container">
            <header>
                <span id="score">Score: ${scoreCount}</span>
                <h2>Question ${currentQuestion.number} of 10</h2>
            </header>
            <form id="js-quiz-form">
            <fieldset>
                <legend class="question">${currentQuestion.question}</legend>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-1" value="0" required>
                    <label for="answer-1">${currentQuestion.options[0]}</label>
                </div>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-2" value="1" required>
                    <label for="answer-2">${currentQuestion.options[1]}</label>
                </div>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-3" value="1" required>
                    <label for="answer-3">${currentQuestion.options[2]}</label>
                </div>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-4" value="1" required>
                    <label for="answer-4">${currentQuestion.options[3]}</label>
                </div>
            </fieldset>
            <button type="submit" role="button" class="js-submit-answer">Submit</button>
            </form>
        </section>`
}

function handleRenderQuiz() {

    // Renders current question and choices in the DOM
    const quizElement = generateCurrentQuestion();
    $("body").prepend(quizElement);

    handleSubmitAnswer();
    console.log("`handleRenderQuiz` ran");
}

function handleSubmitAnswer() {

    // Listens for when form is submitted
    $("#js-quiz-form").submit(function(event) {

        if (handleIsAnswerTrueOrFalse() == true) {
            // If true increment score by 1
            scoreCount++;
        }
       
        // Hide quiz
        $(this).closest("section").addClass("js-hide");
        // Note – This also works: $(this).closest("section").hide();

        // Display answer
        handleRenderAnswer();

        event.preventDefault();
        console.log("Button works!");
    });
    
    console.log("`handleSubmitAnswer` ran");
}

function handleIsAnswerTrueOrFalse () {
    // Get the value of the option submitted and compare to currentQuestion.answer

    console.log("`handleIsAnswerTrueOrFalse` ran");
}

function generateCurrentAnswer() {
    // Looks up current question and stores explanation in HTML
    const currentQuestion = STORE[questionCount];
    return `<section class="container">
                <header>
                    <h2>Score: 1</h2>
                    <div class="result">That&rsquo;s Right!</div>
                </header>
                <div class="correct-answer">
                    <p>${currentQuestion.explanation}</p>
                </div>    
                <button role="button" class="js-next-question">Next</button>
            </section>`
}

function handleRenderAnswer() {
    // Renders explanation and next button in DOM
    const answerElement = generateCurrentAnswer();
    $("body").prepend(answerElement);

    // If answer is false, text feedback will display incorrect
    // If answer is true, text feedback will display correct

    handleClickNextQuestion();
    console.log("`handleRenderAnswer` ran");
}

function handleClickNextQuestion() {

    $(".js-next-question").on("click", function(event) {
        // Upon clicking the next button current question is incremented by 1 
        questionCount++;

        // Hide answer screen
        $(this).closest("section").addClass("js-hide");
        // Note – This also works: $(this).closest("section").hide();

        if (questionCount < STORE.length) {
            // Display quiz
            handleRenderQuiz();  
        } else {
            // Display results
            handleRenderResults();
        }   
    })

    console.log("`handleClickNextQuestion` ran");
}

function generateResults() {
    return `<section class="container">
                <header>
                    <h1>Nice Job.</h1>
                    <h2>You scored 10 out of 10</h2>
                </header>
                <p>Congrats! You know your stuff. Now get out there and blockchain responsibly. </p>
                <button role="button" class="js-start-quiz">Try Again</button>
            </section>`
}

function handleRenderResults() {
    const resultsElement = generateResults();
    $("body").prepend(resultsElement);
    
    // Users should be shown their current score
    // Depending on the users score range, text feedback is shown

    handleStartQuiz();
    console.log("`handleRenderResults` ran");
}

function handleQuiz() {
    handleStartQuiz();
}

$(handleQuiz);