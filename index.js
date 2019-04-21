// TO DOs
// 2. Need to restart quiz from start screen
// 3. Need to add animation for individual elements/refine the animation
// 4. Need to make responsive
// 5. Need to add styling

'use strict';

let questionCount;
let scoreCount;

function updateScoreCount() {
    scoreCount++;
}

function updateQuestionCount() {
    questionCount++;
}

// Event handlers

function handleStartQuiz() {
    scoreCount = 0;
    questionCount = 0;

    $(".js-start-quiz").on("click", function(event) {
        animateOut();
        renderQuiz();  
        console.log("`handleStartQuiz` ran");
    });
}

function handleSubmitAnswer() {
    $("form").submit(function(event) {
        let selected = $("input:checked").val();
        let correctAnswer = STORE[questionCount].answer;

        if (selected === correctAnswer) {
            updateScoreCount();
            animateOut();
            renderAnswerCorrect();
            console.log('answer is correct');
        } else {
            animateOut();
            renderAnswerWrong();
            console.log("answer is wrong");
        }

        event.preventDefault();
        console.log("Button works!");
    });
    console.log("`handleSubmitAnswer` ran");
}

function handleClickNextQuestion() {
    $(".js-next-question").on("click", function(event) {
        updateQuestionCount();

        if (questionCount < STORE.length) {
            animateOut();
            renderQuiz();
        } else {
            animateOut();
            renderQuizResults();
        };
    })
    console.log("`handleClickNextQuestion` ran");
}

// Animations

function animateOut() {
    $(".visible").animate({"top": "-100%"}, 500, "swing", function(){
        $(this).remove();
    });
}

function animateIn() {
    $(".hidden").animate({"top": "0"}, 500, "swing", function() {
        $(this).toggleClass("hidden visible");
    });
}

// Content generation

function generateContainer() {
    return `<section class="container hidden"></section>`;
}

function generateCurrentQuestion() {
    return `<div>
            <header>
                <span id="score">Score: ${scoreCount}</span>
                <h2>Question ${STORE[questionCount].number} of 10</h2>
            </header>
            <form id="js-quiz-form">
            <fieldset>
                <legend class="question">${STORE[questionCount].question}</legend>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-1" value="${STORE[questionCount].options[0]}" required>
                    <label for="answer-1">${STORE[questionCount].options[0]}</label>
                </div>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-2" value="${STORE[questionCount].options[1]}" required>
                    <label for="answer-2">${STORE[questionCount].options[1]}</label>
                </div>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-3" value="${STORE[questionCount].options[2]}" required>
                    <label for="answer-3">${STORE[questionCount].options[2]}</label>
                </div>
                <div class="radio-container">
                    <input type="radio" name="question" id="answer-4" value="${STORE[questionCount].options[3]}" required>
                    <label for="answer-4">${STORE[questionCount].options[3]}</label>
                </div>
            </fieldset>
            <button type="submit" role="button" class="js-submit-answer">Submit</button>
            </form>
            </div>`
}

function generateQuizResults() {
    if (scoreCount >= 8) {
        return `<div>
                <header>
                    <h1>Nice Job.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>Congrats! You know your stuff. Now get out there and blockchain responsibly.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
                </div>`;
    } else if (scoreCount >= 5) {
        return `<div>
                <header>
                    <h1>Not Bad.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>You have a good foundation but there is more to learn.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
                </div>`;
    } else {
        return `<div>
                <header>
                    <h1>Keep Studying.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>Take the quiz again to see if you can do better.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
                </div`;
    };  
}

// Render screens in the DOM

function renderQuiz() {
    animateIn();
    let quizElement = generateCurrentQuestion();
    $(".hidden").html(quizElement);
    renderNewContainer();
    handleSubmitAnswer();
    console.log("`handleRenderQuiz` ran");
}

function renderNewContainer() {
    let newContainer = generateContainer();
    $(".wrapper").append(newContainer);
}

function renderAnswerCorrect() {
    let answerElement = 
    `<header>
            <h2>Score: ${scoreCount}</h2>
            <div class="result">That's Right!</div>
    </header>
    <div class="correct-answer">
        <p>${STORE[questionCount].explanation}</p>
    </div>    
    <button role="button" class="js-next-question">Next</button>`
    
    $(".hidden").html(answerElement);
    animateIn();
    renderNewContainer();
    handleClickNextQuestion();
    console.log("`handleRenderAnswer` ran");
}

function renderAnswerWrong() {
    let answerElement = 
    `<div>
        <header>
            <h2>Score: ${scoreCount}</h2>
            <div class="result">That's Wrong!</div>
        </header>
        <div class="correct-answer">
            <p>${STORE[questionCount].explanation}</p>
        </div>    
        <button role="button" class="js-next-question">Next</button>
    </div>`
    
    $(".hidden").html(answerElement);
    animateIn();
    renderNewContainer();
    handleClickNextQuestion();
    console.log("`handleRenderAnswer` ran");
}

function renderQuizResults() {
    animateIn();
    let resultsElement = generateQuizResults();
    $(".hidden").html(resultsElement);
    renderNewContainer();
    handleStartQuiz();
    console.log("`handleRenderResults` ran");
}

function handleQuiz() {
    handleStartQuiz();
}

$(handleQuiz);