const min = 0;
let max = 5;
let prizes = [10, 5, 2];
let total = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function offerGame() {
    prizes = [10, 5, 2];
    total = 0;
    max = 5;
    let agree = confirm("Do you want to play a game?");
    if (!agree) {
        console.log("You did not become a millionaire");
    } else {
        play();
    }
}

function play() {
    let generatedNumber = getRandomInt(min, max);
    let count = 0;
    let currentAward;
    for (let i = 0; i < 3; i++) {
        count++;
        let userNumber = parseInt(prompt("Enter a number from " + min + " to " + max + "\n" + "Attemts left: " + (3 - i) + "\n" + "Total prize: " + total + "$\n" + "Possible prize in current attempt: " + prizes[i] + "$"));
        if (userNumber === generatedNumber) {
            total += prizes[i];
            currentAward = prizes[i];
            prizes.forEach((el, i) => prizes[i] = el * 3);
            max *= 2;
            console.log("good. it was " + userNumber + '. You are lucky!');
            count--;
            break;
        }
    }
    if (count == 3) {
        if (confirm("You have lost. The game is over for You. Your prize is " + total + "$. Do You want play again?")) {
            prizes = [10, 5, 2];
            total = 0;
            max = 5;
            play();
        } else {
            console.log("Thank you for a game. Your prize is " + total + " $.");
        }
    } else {
        if (confirm("You won " + currentAward + " $. Your total prize is " + total + "$. Do you wont to continue?")) {
            play();
        } else {
            console.log("Thank you for a game. Your prize is " + total + " $.");
            offerGame();
        }
    }
}

offerGame();