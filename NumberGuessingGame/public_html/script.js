            var computerGuess;
            var userGuessLog = [];
            var guesses = 0;
            
            function newGame() {
                window.location.reload(); }
            
            function initial() {
                computerGuess = Math.floor(Math.random() * 100 + 1);
            }
            
            function compareGuess() {
                var userGuess = " " + document.getElementById('inputBox').value;
                
                userGuessLog.push(userGuess);
                document.getElementById('guessLog').innerHTML = userGuessLog;
                
                guesses++;
                document.getElementById('guesses').innerHTML = guesses;
                
                    if(userGuess > computerGuess) {
           document.getElementById('textOutput').innerHTML = 'Guess is too high'; 
           document.getElementById('inputBox').value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = 'Guess is too low';
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = 'Guess is Correct!';
        }
        }