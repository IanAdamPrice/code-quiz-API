var startEl = document.querySelector("#quizBody");
var timerEl = document.querySelector("#timer");
var time = 75;


var timer = function () {

    var timeInt = setInterval(() => {
        if (time > 1) {
            timerEl.textContent = time;
            time --;
        } else {
            timerEl.textContent("You ran out of time!");
            clearInterval(timeInt);
        }
    }, 1000);
};

var questionOne = function() {

    var questionOneEl = document.createElement("div");
    questionOneEl.className = "question-one-container";
    startEl.appendChild(questionOneEl);

    var questionOne = document.createElement("h1");
    questionOne.textContent = "Inside which HTML element do we put the JavaScript?";
    questionOne.className = "question-one";
    questionOneEl.appendChild(questionOne);

    var answerDiv = document.createElement("div");
    answerDiv.className = "answer-container";
    questionOneEl.appendChild(answerDiv);

    var answerOne = document.createElement("button");
    answerOne.textContent = "1. script";
    answerOne.className = "answer-one";
    answerDiv.appendChild(answerOne);

    var answerTwo = document.createElement("button");
    answerTwo.textContent = "2. js";
    answerTwo.className = "answer-two"
    answerDiv.appendChild(answerTwo);

    var answerThree = document.createElement("button");
    answerThree.textContent = "3. scripting";
    answerThree.className = "answer-three"
    answerDiv.appendChild(answerThree);

    var answerFour = document.createElement("button");
    answerFour.textContent = "4. javascript";
    answerFour.className = "answer-four";
    answerDiv.appendChild(answerFour);
}

var startQuiz = function () {
    var body = document.createElement("div");
    body.className = "mainBody";
    startEl.appendChild(body);

    var mainHeader = document.createElement("h1");
    mainHeader.className = "mainTitle";
    mainHeader.textContent = "Coding Quiz Challenge";
    body.appendChild(mainHeader);
        
    var mainParagraph = document.createElement("p");
    mainParagraph.className = "mainText-p";
    mainParagraph.textContent = "Try to answer the following code-related" +
    " questions within the time limit. Keep in mind that incorrect answer will" +
    " penalize your score/time by ten seconds!"
    body.appendChild(mainParagraph);
        
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Start Quiz";
    body.appendChild(startQuizBtn);

    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        mainHeader.remove();
        mainParagraph.remove();

        questionOne();
    });
}

startQuiz ();