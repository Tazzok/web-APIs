//Creating an array of object questions
var questList = [
    {
        question: " Javascript is an _______ language?",
        posAns: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above '],
        correctAns: 0,

    },
    {
        question: 'The "function" and "var" are known as:',
        posAns: ['Keywords', ' Data types', 'Declaration statements', 'Prototypes'],
        correctAns: 2,

    },
    {
        question: "In JavaScript the x===y statement implies that:",
        posAns: ['Both x and y are equal in value, type and reference address as well.', 'Both are x and y are equal in value only. ', 'Both are equal in the value and data type. ', 'Both are not same at all. '],
        correctAns: 2,

    },
    {
        question: "Which of the following attribute is used to provide a unique name to an element? ",
        posAns: ['class ', ' id', 'type ', 'None of the above '],
        correctAns: 1,

    },
    {
        question: " How to create a checkbox in HTML? ",
        posAns: ['<input type = "checkbox"> ', '<input type = "button"> ', '<checkbox> ', '<input type = "check">'],
        correctAns: 0,

    },
    {
        question: "How to select the elements with the class name 'example'? ",
        posAns: ['example ', '#example ', '.example ', 'Class example '],
        correctAns: 2,

    },
    {
        question: "Which of the following number object function returns the value of the number? ",
        posAns: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
        correctAns: 1,

    },
    {
        question: "Which one of the following operator returns false if both values are equal? ",
        posAns: ['! ', '!== ', '!= ', 'All of the above '],
        correctAns: 2,

    },
];

var h1EL = document.getElementById('firstLine');
var pEL = document.getElementById('info');
var ulEL = document.querySelectorAll('.answers');
var optList = document.querySelector('.options');
var timerDisplay = document.getElementById('time');
var secondsLeft = 75;
var qcount = 3;

var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startQuiz);
optList.style.display="none";


// console.log(optList.attr("data-correct"));

function startQuiz() {
    optList.style.display="block";

    startTimer();
    startQuestions();

};



function startTimer() {
    var timerstart = setInterval(function () {

        if (secondsLeft > 1) {
            timerDisplay.textContent = secondsLeft;
            secondsLeft--;
            //call question function
        }
        else if (qcount == 8) {
            timerDisplay.textContent = '';
            clearInterval(timerstart);
            // Calls function to create and append the highscore page
            highscore();

        }
        else {
            timerDisplay.textContent = '';
            clearInterval(timerstart);
            // Calls function to create and append the highscore page
            highscore();
        }

    }, 1000);
}


function startQuestions() {
    h1EL.textContent = '';
    pEL.style.display = "none";
    startButton.style.display = "none";

    // adds the questions to the page
    h1EL.textContent = questList[qcount].question;


    //adds the answers to the page
    for (var i = 0; i < ulEL.length; i++) {
        var answer = ulEL[i];

        answer.textContent = questList[qcount].posAns[i];

        //set attribute to true or false
        if (questList[qcount].correctAns == i) {
            answer.setAttribute("data-correct", "true");
        }
        else {
            answer.setAttribute("data-correct", "false");
        }

    };

    optList.addEventListener('click', function (event) {
        if (event.target.matches(".answers")) {
            var rightAns = event.target.getAttribute("data-correct");

            if (rightAns == "true") {
                rightAns();
            }
            else {
                wrongAns();

            }


        }
    });


};

function highscore() {


}

function rightAns(){




};

function wrongAns(){



};

// console.log(rightAns);
//             console.log(typeof rightAns);

    // optList.addEventListener('click', function(event){
    //     var targetElement = event.target;
    //     console.log(targetElement);
    // });

    // function myFunction(event) { 
    //     let text = event.target.tagName;
    //     document.getElementById("demo").innerHTML = text;
    //   }

    

// startButton.addEventListener("click", startQuiz);






//   create questionslist : question string, options, correct ans
//   create question counter = 0
//   Click on start button(attach event listener)
//      start timer from 75 secs
//           every sec time is going to decrement
//           display it on screen
//      show 1st question with options(function)
//   Clicking on the answer options (attach event listener)
//       check if ans click by user matches with correct ans for question
//          display correct msg
//          check if we have time
//            if question counter < length of question array
//               increment the question counter
//                    go to next question
//           else ||  if(timer === 0)
//           stop timer and grab the last sec left
//              display the score
//              form is going to take user initial and score and save it in local storage and display it on second html page.
//       if wrong ans
//          display wrong msg
//          decrement timer by 10
//          check if we have time
//          if question counter < length of question array
//               increment the question counter
//               go to next question
//           else || if(timer === 0)
//               stop timer and grab the last sec left
//              display the score
//              form is going to take user initial and score and save it in local storage and display it on second html page.