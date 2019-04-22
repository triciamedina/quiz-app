// TO DOs
// 1. Need to add animation for individual elements/refine the animation
// 2. Need to add styling
// 3. Need to make responsive

'use strict';

let questionCount;
let scoreCount;

function updateScoreCount() {
    scoreCount++;
}

function updateQuestionCount() {
    questionCount++;
}

//Animations

function animateUp() {
    $(".visible").animate({"top": "-100%"}, 500, "swing", function(){
        $(this).remove();
    });
}

function animateDown() {
    $(".visible").animate({"top": "100%"}, 500, "swing", function(){
        $(this).remove();
    });
}

function animateFromAbove() {
    $(".hidden-above").animate({"top": "0"}, 500, "swing", function() {
        $(this).toggleClass("hidden-above visible");
    });
}

function animateFromBelow() {
    $(".hidden-below").animate({"top": "0"}, 500, "swing", function() {
        $(this).toggleClass("hidden-below visible");
    });
}

// Start Quiz

function handleStartQuiz() {
    scoreCount = 0;
    questionCount = 0;

    $(".js-start-quiz").on("click", function(event) {
        animateUp();
        renderQuiz();  
    });
}

function renderQuiz() {
    animateFromBelow();
    let quizElement = generateCurrentQuestion();
    $(".hidden-below").html(quizElement);
    renderContainerBelow();
    handleSubmitAnswer();
}

function generateCurrentQuestion() {
    return `<div class="box">
            <header>
                <span id="score">Score: ${scoreCount}</span>
                <h2>Question ${STORE[questionCount].number} of 10</h2>
            </header>
            <form class="js-quiz-form">
            <fieldset>
                <legend class="question">${STORE[questionCount].question}</legend>
                <label for="answer-1" class="radio-container">
                    <input type="radio" name="question" id="answer-1" value="${STORE[questionCount].options[0]}" required>
                    ${STORE[questionCount].options[0]}
                </label>
                <label for="answer-2" class="radio-container">
                    <input type="radio" name="question" id="answer-2" value="${STORE[questionCount].options[1]}" required>
                    ${STORE[questionCount].options[1]}
                </label>
                <label for="answer-3" class="radio-container">
                    <input type="radio" name="question" id="answer-3" value="${STORE[questionCount].options[2]}" required>
                    ${STORE[questionCount].options[2]}
                </label>
                <label for="answer-4" class="radio-container">
                    <input type="radio" name="question" id="answer-4" value="${STORE[questionCount].options[3]}" required>
                    ${STORE[questionCount].options[3]}
                </label>
            </fieldset>
            <button type="submit" role="button" class="js-submit-answer">Submit</button>
            </form>
            </div>`
}

function renderContainerBelow() {
    let newContainer = `<section class="hidden-below"></section>`;
    $(".container").append(newContainer);
}

function handleSubmitAnswer() {
    $(".js-quiz-form").submit(function(event) {
        let selected = $("input:checked").val();
        let correctAnswer = STORE[questionCount].answer;

        if (selected === correctAnswer) {
            updateScoreCount();
            animateUp();
            renderAnswerCorrect();
        } else {
            animateUp();
            renderAnswerWrong();
        }

        event.preventDefault();
    });
}

function renderAnswerCorrect() {
    let answerElement = 
    `<div class="box">
        <header>
            <h2>Score: ${scoreCount}</h2>
            <div class="result">That's Right!</div>
        </header>
        <div class="correct-answer">
         <p>${STORE[questionCount].explanation}</p>
        </div>    
    <button role="button" class="js-next-question">Next</button>
    </div>`
    
    $(".hidden-below").html(answerElement);
    animateFromBelow();
    renderContainerBelow();
    handleClickNextQuestion();
}

function renderAnswerWrong() {
    let answerElement = 
    `<div class="box">
        <header>
            <h2>Score: ${scoreCount}</h2>
            <div class="result">That's Wrong!</div>
        </header>
        <div class="correct-answer">
            <p>${STORE[questionCount].explanation}</p>
        </div>    
        <button role="button" class="js-next-question">Next</button>
    </div>`
    
    $(".hidden-below").html(answerElement);
    animateFromBelow();
    renderContainerBelow();
    handleClickNextQuestion();
}

function handleClickNextQuestion() {
    $(".js-next-question").on("click", function(event) {
        updateQuestionCount();

        if (questionCount < STORE.length) {
            animateUp();
            renderQuiz();
        } else {
            animateUp();
            renderQuizResults();
        };
    })
}

function renderQuizResults() {
    let resultsElement = generateQuizResults();
    $(".hidden-below").html(resultsElement);
    animateFromBelow();
    renderContainerAbove();
    handleQuizReset();
}

function generateQuizResults() {
    if (scoreCount >= 8) {
        return `<div class="box">
                <header>
                    <h1>Nice Job.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>Congrats! You know your stuff. Now get out there and blockchain responsibly.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
                </div>`;
    } else if (scoreCount >= 5) {
        return `<div class="box">
                <header>
                    <h1>Not Bad.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>You have a good foundation but there is more to learn.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
                </div>`;
    } else {
        return `<div class="box">
                <header>
                    <h1>Keep Studying.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>Take the quiz again to see if you can do better.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
                </div`;
    };  
}

function renderContainerAbove() {
    let newContainer = `<section class="hidden-above"></section>`;
    $(".container").append(newContainer);
}

function handleQuizReset() {
    $(".js-start-quiz").on("click", function(event) {
        scoreCount = 0;
        questionCount = 0;
        animateDown();
        renderStartScreen();  
    });
}

function renderStartScreen() {
    let startScreen = generateStartScreen();
    $(".hidden-above").html(startScreen);
    animateFromAbove();
    renderContainerBelow();
    handleStartQuiz();
}

function generateStartScreen() {
    return `<div class="box">
                    <header>
                        <h1>What Is Blockchain?</h1>
                    </header>
                    <p>You may have heard of the cryptocurrency Bitcoin, but how much do you really know about the technology behind it?</p>
                    <button role="button" class="js-start-quiz">Start Quiz</button>
                </div>`;
}

function handleQuiz() {
    handleStartQuiz();
}

$(handleQuiz);