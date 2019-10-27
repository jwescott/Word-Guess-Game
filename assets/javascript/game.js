document.write("Press any key to get started!")
        // var name = prompt("What's your name?");
        var wordsList = ["red", "yellow", "purple", "green", "orange", "blue", "pink"];
        var word = wordsList[Math.floor(Math.random() * wordsList.length)];
        var answerArray = [];
        var remainingLetters = word.length;
        var rightWord   
        var wrongWord
        // Counters
        var winCount = 0;
        var loseCount = 0;
        var guessesLeft = 10; 
        

        console.log(word);

        window.onload = function() {
            makeBoard()
        }
       
        
   function makeBoard(){
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    document.getElementById("boardgame").innerHTML = answerArray.join(" ");
   }
      

  ;
            // var guess = prompt("Guess a letter!");
            // console.log(guess)


            
       // }

        document.onkeyup = function(event) {
                // while (remainingLetters > 0) {
console.log( answerArray.join(" "))





            
            var guess = event.key
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
            
                }
                else {

                }
            }
            //refresh
            document.getElementById("boardgame").innerHTML = answerArray.join(" ");

        }
    

        //Check the keypress against chosen word
        //If it's match
            //Go into answer array
            //Show on page
        //If it's not a match
            //Go into wrong guess array
            //show on page

        //Win-getting all letter right before you run out of guesses
        //Losses-if remaining guesses hits zero and still have underscore
        





           
           
           
           
           
            //     <!-- 1. Pick a random word.
            // 2. Take the player’s guess.
    // 3. Check that the player’s guess is a valid letter.
    // 4. Keep track of letters the player has guessed.
    // 5. Show the player their progress.
    // 6. Finish when the player has guessed the word.  -->