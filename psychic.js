    //create variables for game
        var alpha = ['a','b','c']; 
        var guessed = [];


        var winCounter = 0;
        var lossCounter = 0;
        var guessesLeft = 10; 
        var guessLog = "";

    //grab reference to my DOM elements
    document.onkeyup = function(event) {
    
        //store user's key press in variable
        var userGuess = event.key;

        //push userGuess into guessed array variable
        guessed.push(userGuess);
    

        var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
    
    
    //add onkeyup selection to guessed array
        if (computerGuess === userGuess){
            winCounter ++;
            alert("You got it!");
        }else {
            guessesLeft --; 
        }
        if (guessesLeft === 0){
            alert("Game Over");
            lossCounter ++;
            guessesLeft = 10;
            // resetGame();
        } 
        
        

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<h1>The Psychic Game</h1>" + 
            "<p>Guess what letter I'm thinking of</p>" + 
            "<p>Wins: " + winCounter + "</p>" +
            "<p>Losses: " + lossCounter + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your guesses so far: " + guessed + "</p>";

       

    document.querySelector("#game").innerHTML = html; 

    };

    // function resetGame() {
    //     var html =
            
    //         "<p>Wins: " + wins + "</p>" +
    //         "<p>Losses: " + losses + "</p>" +
    //         "<p>Guesses Left:" + refresh + "</p>" +
    //         "<p>Your guesses so far:" + guessLog + "</p>";
    //     };
