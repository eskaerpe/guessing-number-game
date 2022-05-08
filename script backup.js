var skipBtn;
var money;
function startGame() {
    skipBtn = document.getElementById("skip-btn");

    skipBtn.style.display = "inline";

    var startBtn = document.getElementById("start-next-btn");
    startBtn.textContent = "Next";
    startBtn.style.display = "none";

    money = 0;
    document.getElementById("money").textContent = "Money : " + money.toString() + "$";
    guessNumberGame();
}

function skipButton() {
    guessNumberGame();
}
var correctAnswer;
var FirstOptionRandom;
var SecondOptionRandom;
var FirstOption;
var SecondOption;
var userChoice;
function guessNumberGame() {
    FirstOptionRandom = Math.floor(Math.random() * 50 + 1);
    SecondOptionRandom = Math.floor(Math.random() * 50 + 1);

    FirstOption = document.getElementById("option-1");
    FirstOption.textContent = FirstOptionRandom;

    SecondOption = document.getElementById("option-2");
    SecondOption.textContent = SecondOptionRandom;

    FirstOption.style.backgroundColor = "#efefef";
    FirstOption.style.color = "#4D8AC8";
    FirstOption.style.pointerEvents = "auto";
    SecondOption.style.backgroundColor = "#efefef";
    SecondOption.style.color = "#4D8AC8";
    SecondOption.style.pointerEvents = "auto";

    var numDisplay = document.getElementById("number-guess-display");
    numDisplay.textContent = FirstOptionRandom.toString() + " or " + SecondOptionRandom.toString();

    var answerList = [FirstOptionRandom, SecondOptionRandom];
    correctAnswer = answerList[Math.floor(Math.random() * answerList.length)];
    console.log("Correct answer is " + correctAnswer);
}

function ChooseFirstOption() {
    FirstOption.style.pointerEvents = "none";
    userChoice = FirstOptionRandom;
    console.log("You chose First Option : " + FirstOptionRandom);
    checkAnswer();
}

function ChooseSecondOption() {
    SecondOption.style.pointerEvents = "none";
    userChoice = SecondOptionRandom;
    console.log("You chose Second Option : " + SecondOptionRandom);
    checkAnswer();
}

function checkAnswer() {
    if (userChoice === correctAnswer) {
        console.log("You are correct!");
    } else {
        console.log("You are incorrect!");
    }
    userChoiceIsCorrect();
    setTimeout(guessNumberGame, 1000);
}

function userChoiceIsCorrect() {
    if (correctAnswer === FirstOptionRandom) {
        FirstOption.style.backgroundColor = "#94ffa4";
        SecondOption.style.backgroundColor = "#fc7272";
        SecondOption.style.color = "white";
    } else if (correctAnswer === SecondOptionRandom) {
        SecondOption.style.backgroundColor = "#94ffa4";
        FirstOption.style.backgroundColor = "#fc7272";
        FirstOption.style.color = "white";
    }
}

// function FirstOptionRandom() {
//     return Math.floor(Math.random() * 100);
// }

// function SecondOptionRandom() {
//     return Math.floor(Math.random() * 100);
// }
