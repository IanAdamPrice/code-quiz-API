var startEl = document.querySelector("#quizBody");

var questionOne = function() {
    var questionOneContainer = document.createElement("div");
    questionOneContainer.className = "question-one-container";
    startEl.appendChild(questionOneContainer);

    var questionOne = document.createElement("h1");
    questionOne.textContent = "Inside which HTML element do we put the JavaScript?";
    questionOneContainer.appendChild(questionOne);

    var answerOne = document.createElement("button");
    answerOne.textContent = "script";
    questionOneContainer.appendChild(answerOne);

    var answerTwo = document.createElement("button");
    answerTwo.textContent = "js";
    questionOneContainer.appendChild(answerTwo);

    var answerThree = document.createElement("button");
    answerThree.textContent = "scripting";
    questionOneContainer.appendChild(answerThree);

    var answerFour = document.createElement("button");
    answerFour.textContent = "javascript";
    questionOneContainer.appendChild(answerFour);
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
        startQuizBtn.remove();
        mainHeader.remove();
        mainParagraph.remove();

        questionOne();
    });
}

startQuiz ();