document.write("Press any key to get started!")
        var name = prompt("What's your name?");
        console.log("Hello " + name);

        var words = ["red", "yellow", "purple", "green", "orange", "blue", "pink"];

        var word = words[Math.floor(Math.random() * words.length)];
        console.log("Computer Guess " + word)




        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = word.length;

        while (remainingLetters > 0) {

            alert(answerArray.join(" "));




            var guess = prompt("Guess a letter!");
            console.log(guess)


            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }

    //     <!-- 1. Pick a random word.
    // 2. Take the player’s guess.
    // 3. Check that the player’s guess is a valid letter.
    // 4. Keep track of letters the player has guessed.
    // 5. Show the player their progress.
    // 6. Finish when the player has guessed the word.  -->