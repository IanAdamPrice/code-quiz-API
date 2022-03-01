var startEl = document.querySelector("#quizBody");
var timerEl = document.querySelector("#timer");
var time = 75;
var score = 0;

var score = function () {
    totalScore = totalScore + 10;
}


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

var questionFive = function () {
    var wrong = function () {
        questionDiv.remove();
    }

    var questionDiv = document.createElement("div");
    questionDiv.className = "questionDiv";
    startEl.appendChild(questionDiv);

    var question =document.createElement("h1");
    question.className = "question";
    question.textContent = "What are the main differences between let and const?";
    questionDiv.appendChild(question);

    var answerDiv = document.createElement("div");
    answerDiv.className = "answerDiv";
    questionDiv.appendChild(answerDiv);

    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. let can be reassigned, const cannot be reassigned";
    answerDiv.appendChild(answer1);
    answer1.addEventListener("click", event => {
        questionDiv.remove();
        points();
    })

    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. let cannot be reassigned, const can be reassigned";
    answerDiv.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrong();
    });

    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. let is functional scope, while const is block scope";
    answerDiv.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrong();
    });

    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. let is block scope, while const is functional scope";
    answerDiv.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrong();
    });
};

var questionFour = function () {
    var wrong = function () {
        questionFive();
        questionDiv.remove();
        time = time - 10;
    }

    var questionDiv = document.createElement("div");
    questionDiv.className = "questionDiv";
    startEl.appendChild(questionDiv);

    var question =document.createElement("h1");
    question.className = "question";
    question.textContent = "How do you round the number 7.25, to the nearest integer?";
    questionDiv.appendChild(question);

    var answerDiv = document.createElement("div");
    answerDiv.className = "answerDiv";
    questionDiv.appendChild(answerDiv);

    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. Math.rnd(7.25)";
    answerDiv.appendChild(answer1);
    answer1.addEventListener("click", event => {
        wrong();
    });

    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. round(7.25)";
    answerDiv.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrong();
    });

    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. rnd(7.25)";
    answerDiv.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrong();
    });

    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. Math.round(7.25)";
    answerDiv.appendChild(answer4);
    answer4.addEventListener("click", event => {
        questionDiv.remove();
        questionFive();
        points();
    })
};

var questionThree = function () {
    var wrong = function () {
        questionFour();
        questionDiv.remove();
        time = time - 10;
    }

    var questionDiv = document.createElement("div");
    questionDiv.className = "questionDiv";
    startEl.appendChild(questionDiv);

    var question =document.createElement("h1");
    question.className = "question";
    question.textContent = "What is the correct way to write a JavaScript array";
    questionDiv.appendChild(question);

    var answerDiv = document.createElement("div");
    answerDiv.className = "answerDiv";
    questionDiv.appendChild(answerDiv);

    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. var colors = ['red', 'green', 'blue']";
    answerDiv.appendChild(answer1);
    answer1.addEventListener("click", event => {
        questionDiv.remove();
        questionFour();
        points();
    })

    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. var colors = 1 = ('red'),2 = ('green')";
    answerDiv.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrong();
    });

    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. var colors = 'red', 'green', 'blue'";
    answerDiv.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrong();
    });

    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. var colors = (1:'red', 2:'green', 3:'blue'";
    answerDiv.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrong();
    });
};

var questionTwo = function () {
    var wrong = function () {
        questionThree();
        questionDiv.remove();
        time = time - 10;
    }

    var questionDiv = document.createElement("div");
    questionDiv.className = "questionDiv";
    startEl.appendChild(questionDiv);

    var question =document.createElement("h1");
    question.className = "question";
    question.textContent = "How to write an IF statement in JavaScript";
    questionDiv.appendChild(question);

    var answerDiv = document.createElement("div");
    answerDiv.className = "answerDiv";
    questionDiv.appendChild(answerDiv);

    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. if i=5";
    answerDiv.appendChild(answer1);
    answer1.addEventListener("click", event => {
        wrong();
    });

    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. if (i==5)";
    answerDiv.appendChild(answer2);
    answer2.addEventListener("click", event => {
        questionDiv.remove();
        questionThree();
        points();
    })

    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. if i==5 then";
    answerDiv.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrong();
    });

    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. if i=5 then";
    answerDiv.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrong();
    });
};

var questionOne = function() {

    var wrong = function() {
        time = time - 10;
        questionDiv.remove();
        questionTwo();
    }

    var questionDiv = document.createElement("div");
    questionDiv.className = "questionDiv";
    startEl.appendChild(questionDiv);

    var question = document.createElement("h1");
    question.textContent = "Inside which HTML element do we put the JavaScript?";
    question.className = "question";
    questionDiv.appendChild(question);

    var answerDiv = document.createElement("div");
    answerDiv.className = "answerDiv";
    questionDiv.appendChild(answerDiv);

    var answer1 = document.createElement("button");
    answer1.textContent = "1. script";
    answer1.className = "answer-one";
    answerDiv.appendChild(answer1);
    answer1.addEventListener("click", event => {
        questionDiv.remove();
        questionTwo();
        points();
    })



    var answer2 = document.createElement("button");
    answer2.textContent = "2. js";
    answer2.className = "answer-two"
    answerDiv.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrong();
    });


    var answer3 = document.createElement("button");
    answer3.textContent = "3. scripting";
    answer3.className = "answer-three"
    answerDiv.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrong();
    });



    var answer4 = document.createElement("button");
    answer4.textContent = "4. javascript";
    answer4.className = "answer-four";
    answerDiv.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrong();
    });

};

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