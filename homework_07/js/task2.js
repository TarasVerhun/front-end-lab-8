let max = 5;
let prizes = [10, 5, 2];
let total = 0;
let accept = true;
let offer = true;

while (accept) {
    if (offer) {
        agree = confirm("Do you want to play a game?");
    }
    if (!agree) {
        console.log("You did not become a millionaire");
        break;
    } else {
        let generatedNumber = Math.floor(Math.random() * (max + 1));
        let count = 0;
        let currentAward;
        for (let i = 0; i < 3; i++) {
            count++;
            let userNumber = parseInt(
                prompt(
                    "Enter a number from 0 to " +
                    max +
                    "\n" +
                    "Attemts left: " +
                    (3 - i) +
                    "\n" +
                    "Total prize: " +
                    total +
                    "$\n" +
                    "Possible prize in current attempt: " +
                    prizes[i] +
                    "$"
                )
            );
            if (userNumber === generatedNumber) {
                total += prizes[i];
                currentAward = prizes[i];
                prizes.forEach((el, i) => {
                    i == 0 ?
                        (prizes[i] = el * 3) :
                        (prizes[i] = Math.floor(prizes[i - 1] / 2));
                });
                max *= 2;
                console.log("good. it was " + userNumber + ". You are lucky!");
                count--;
                break;
            }
        }
        if (count == 3) {
            offer = false;
            if (
                confirm(
                    "You have lost. The game is over for You. Your prize is " +
                    total +
                    "$. Do You want play again?"
                )
            ) {
                prizes = [10, 5, 2];
                total = 0;
                max = 5;
            } else {
                console.log("Thank you for a game. Your prize is " + total + " $.");
                accept = false;
            }
        } else {
            if (!confirm(
                    "You won " +
                    currentAward +
                    " $. Your total prize is " +
                    total +
                    "$. Do you wont to continue?"
                )) {
                if (confirm("Do you want to play from the beginning again?")) {
                    offer = false;
                    console.log(
                        "In this game Your prize is " + total + " $. Let's start again."
                    );
                    max = 5;
                    prizes = [10, 5, 2];
                    total = 0;
                } else {
                    accept = false;
                    console.log("Thank you for a game. Your prize is " + total + " $.");
                }
            } else {
                offer = false;
            }
        }
    }
}