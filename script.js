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
    money -= 2;
    document.getElementById("money").textContent = "Money : " + money.toString() + "$";
}
var correctAnswer;
var FirstOptionRandom;
var SecondOptionRandom;
var FirstOption;
var SecondOption;
var userChoice;
function guessNumberGame() {
    if (money < 0) {
        alert("Game Over!\nYour money is 0 or less");
        location.reload();
    }

    FirstOptionRandom = Math.floor(Math.random() * 50 + 1);
    SecondOptionRandom = Math.floor(Math.random() * 50 + 2);

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
        userChoiceIsCorrect();
        setTimeout(guessNumberGame, 1000);
        money += 1;
        document.getElementById("money").textContent = "Money : " + money.toString() + "$";
        return true;
    } else {
        console.log("You are incorrect!");
        userChoiceIsWrong();
        setTimeout(guessNumberGame, 1000);
        money -= 2;
        document.getElementById("money").textContent = "Money : " + money.toString() + "$";
        return false;
    }
}

function userChoiceIsCorrect() {
    if (correctAnswer === FirstOptionRandom) {
        FirstOption.style.backgroundColor = "#94ffa4";
    } else if (correctAnswer === SecondOptionRandom) {
        SecondOption.style.backgroundColor = "#94ffa4";
    }
}

function userChoiceIsWrong() {
    if (correctAnswer !== FirstOptionRandom) {
        FirstOption.style.backgroundColor = "#ffa494";
        SecondOption.style.backgroundColor = "#94ffa4";
    } else if (correctAnswer !== SecondOptionRandom) {
        SecondOption.style.backgroundColor = "#ffa494";
        FirstOption.style.backgroundColor = "#94ffa4";
    }
}

// function FirstOptionRandom() {
//     return Math.floor(Math.random() * 100);
// }

// function SecondOptionRandom() {
//     return Math.floor(Math.random() * 100);
// }
