'use strict';

let questionCount;
let scoreCount;

function handleStartQuiz() {
    scoreCount = 0;
    questionCount = 0;

    $(".js-start-quiz").on("click", function(event) {
        handleHideScreen();
        handleRenderQuiz();  
        console.log("`handleStartQuiz` ran");
    });
}

function handleHideScreen() {
    // Note – This also works: $("section").hide();
    // Animation can go here?
    $("section").addClass("js-hide");
    // $("section").slideUp();
    console.log("`hideScreen` ran");
}

function generateCurrentQuestion() {
    return `<section class="container">
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
        </section>`
}

function handleRenderQuiz() {
    let quizElement = generateCurrentQuestion();
    // Animation can go here?
    $("body").prepend(quizElement);
    handleSubmitAnswer();
    console.log("`handleRenderQuiz` ran");
}

function handleUpdateScoreCount() {
    scoreCount++;
}

function handleSubmitAnswer() {
    $("#js-quiz-form").submit(function(event) {
        let selected = $("input:checked").val();
        let correctAnswer = STORE[questionCount].answer;

        if (selected === correctAnswer) {
            handleUpdateScoreCount();
            handleHideScreen();
            renderAnswerCorrect();
            console.log('answer is correct');
        } else {
            handleHideScreen();
            renderAnswerWrong();
            console.log("answer is wrong");
        }

        event.preventDefault();
        console.log("Button works!");
    });
    console.log("`handleSubmitAnswer` ran");
}

function renderAnswerCorrect() {
    let answerElement = 
    `<section class="container">
        <header>
            <h2>Score: ${scoreCount}</h2>
            <div class="result">That's Right!</div>
        </header>
        <div class="correct-answer">
            <p>${STORE[questionCount].explanation}</p>
        </div>    
        <button role="button" class="js-next-question">Next</button>
    </section>`
    
    $("body").prepend(answerElement);
    handleClickNextQuestion();
    console.log("`handleRenderAnswer` ran");
}

function renderAnswerWrong() {
    let answerElement = 
    `<section class="container">
        <header>
            <h2>Score: ${scoreCount}</h2>
            <div class="result">That's Wrong!</div>
        </header>
        <div class="correct-answer">
            <p>${STORE[questionCount].explanation}</p>
        </div>    
        <button role="button" class="js-next-question">Next</button>
    </section>`
    
    $("body").prepend(answerElement);
    handleClickNextQuestion();
    console.log("`handleRenderAnswer` ran");
}

function updateQuestionCount() {
    questionCount++;
}

function handleClickNextQuestion() {
    $(".js-next-question").on("click", function(event) {
        updateQuestionCount();
        handleHideScreen();

        if (questionCount < STORE.length) {
            handleRenderQuiz();  
        } else {
            handleRenderQuizResults();
        };
    })
    console.log("`handleClickNextQuestion` ran");
}

function generateQuizResults() {
    if (scoreCount >= 8) {
        return `<section class="container">
                <header>
                    <h1>Nice Job.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>Congrats! You know your stuff. Now get out there and blockchain responsibly.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
            </section>`;
    } else if (scoreCount >= 5) {
        return `<section class="container">
                <header>
                    <h1>Not Bad.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>You have a good foundation but there is more to learn.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
            </section>`;
    } else {
        return `<section class="container">
                <header>
                    <h1>Keep Studying.</h1>
                    <h2>You scored ${scoreCount} out of 10</h2>
                </header>
                <p>Take the quiz again to see if you can do better.</p>
                <button role="button" class="js-start-quiz">Try Again</button>
            </section>`;
    };
    
}

function handleRenderQuizResults() {
    let resultsElement = generateQuizResults();
    $("body").prepend(resultsElement);
    handleStartQuiz();
    console.log("`handleRenderResults` ran");
}

function handleQuiz() {
    handleStartQuiz();
}

$(handleQuiz);