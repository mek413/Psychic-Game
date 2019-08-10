var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var globalGuess = "";
var computerGuess = "";
function computerAnswer() {
     computerGuess = options[Math.floor(Math.random()*options.length)];
};
computerAnswer();

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();
    globalGuess += (userGuess + ",");
        if (userGuess== 'a' ||userGuess== 'b' ||userGuess== 'c' ||userGuess== 'd' ||userGuess== 'e' ||userGuess== 'f' ||userGuess== 'g' ||userGuess== 'h' ||userGuess== 'i' ||userGuess== 'j' ||userGuess== 'k' ||userGuess== 'l' ||userGuess== 'm' ||userGuess== 'n' ||userGuess== 'o' ||userGuess== 'p' ||userGuess== 'q' ||userGuess== 'r' ||userGuess== 's' ||userGuess== 't' ||userGuess== 'u' ||userGuess== 'v' ||userGuess== 'w' ||userGuess== 'x' ||userGuess== 'y' ||userGuess== 'z') {
            if (userGuess==computerGuess) {
                wins++;
                guessesLeft = 9;
                globalGuess = "";
                computerAnswer();
            }
            if (userGuess!==computerGuess) {
                guessesLeft--;
                
                if (guessesLeft== 0) {
                    losses++;
                    guessesLeft = 9;
                    globalGuess = "";
                    computerAnswer();
                }
        }
    }
    else {
        
    }
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById('user-input').innerHTML = "Your guesses so far: " + globalGuess;
}
