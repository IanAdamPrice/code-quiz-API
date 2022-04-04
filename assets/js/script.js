var startEl = document.querySelector("#quizBody");
var timerEl = document.querySelector("#timer");
var time = 75;
var totalScore = 0;

var score = function () {
  totalScore = totalScore + 10;
}


var timer = function () {
  var timeInt = setInterval(() => {
    if (time > 1) {
      timerEl.textContent = time;
      time --;
    } else {
        clearInterval(timeInt);
    }
  }, 1000);
};


var highScore = function () {
  var highScoreDiv = document.createElement("div");
  highScoreDiv.className = "highScore";
  startEl.appendChild(highScoreDiv);
      
  var title = document.createElement("h1");
  title.className = "high-score-title";
  title.textContent = "High Scores";
  highScoreDiv.appendChild(title);
      
  var initals = localStorage.getItem("initals");
  var score = localStorage.getItem("result");
  var leaderboardScore = document.createElement("p");
  leaderboardScore.className = "leaderboard-score";
  leaderboardScore.textContent = "1. " + initals + " - " + score;
  highScoreDiv.appendChild(leaderboardScore);
      
      
  var leaderboard = document.createElement("div");
  leaderboard.className = "leaderboard";
  highScoreDiv.appendChild(leaderboard);

  var goBack = document.createElement("button");
  goBack.className = "go-back-btn";
  goBack.textContent = "Go Back";
  goBack.addEventListener("click", event => {
    totalPoints = 0;
    end = false;
    timeLeft = 75;
    highScoreDiv.remove();
    startQuiz();
  })
  leaderboard.appendChild(goBack);

  var clearHighScore = document.createElement("button");
  clearHighScore.className = "clear-highScore";
  clearHighScore.textContent = "Clear High Scores";
  clearHighScore.addEventListener("click", event => {
    localStorage.removeItem("initals")
    localStorage.removeItem("result")
    leaderboardScore.remove();
  })
  leaderboard.appendChild(clearHighScore);
}

var yourScore = function () {
  var scoreDiv = document.createElement("div");
  scoreDiv.className = "scoreDiv";
  startEl.appendChild(scoreDiv);

  var allDone = document.createElement("h1");
  allDone.textContent = "All Done!";
  allDone.className = "allDone";
  scoreDiv.appendChild(allDone);

  var result = document.createElement("h4");
  result.textContent = "Your final score is" + totalScore;
  result.className = "result";
  scoreDiv.appendChild(result);

  var inputContainer = document.createElement("div");
  inputContainer.className = "inputContainer"
  scoreDiv.appendChild(inputContainer);

  var label = document.createElement("label");
  label.textContent = "Enter Your Initials";
  label.className = "label";
  label.setAttribute("for", "input");
  inputContainer.appendChild(label);

  var initalInput = document.createElement("Input");
  initalInput.className = "initial-input";
  initalInput.setAttribute("id", "input")
  initalInput.setAttribute("name", "input");
  initalInput.setAttribute("type", "text");
  inputContainer.appendChild(initalInput);

  var submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.className = "submit-btn";
  submit.addEventListener("click", event => {

        var initals = document.getElementById("input").value;

        localStorage.setItem("initals", initals);

        localStorage.setItem("result", totalScore);

        scoreDiv.remove();

        highScore();
    })
    inputContainer.appendChild(submit);


}

var questionFive = function () {
  var wrong = function () {
    questionDiv.remove();
    yourScore();
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
    score();
    yourScore();
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
        score();
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
        score();
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
        score();
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
        score();
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