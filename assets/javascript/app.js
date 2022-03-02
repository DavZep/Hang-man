// Class Breakdown 2/21/22----------------------
/*
---game
random word picked
displayed on screen as "_" underscore
user gets equivelent tothe  correct word length
each guess is displayed on screen
----gamplay
user guess a letter
comp checks if letter is in the word
if letter is in word, letter displays in "_"underscore
if letter is not in the word the comp lets user know.  they then get a strike/guesses goes down

*/

//variable declaration 
//created a collection of words used for game
var wordBank = ["ratatouille", "dune", "spiderman", "venom", "spacejam",
    "toystory", "godzilla", "wonderwoman", "borat", "starwars", "thehungergames",
    "ted", "tron", "inception", "avatar", "jurrassicpark", "matrix", "terminator"]
var gameWord = ""
//gameWord length
var totalGuesses = 0
// list of letters the user has guessd
var lettersGuessed = []
//word as dashes
var gameWordDashes = ""
//correct guess sound
let correctSound = new Audio("./assets/audio/correct_answer.mp3");
correctSound.volume = 0.3;
//eliminated sound
let wrongSound = new Audio("./assets/audio/wrong_answer.mp3");
wrongSound.volume = 0.2;

//variables that will be used to write to the HTML id's for each (grabs placeholder)
var messageDiv = document.getElementById("message")
var wordDiv = document.getElementById("game-word")
var totalGuessDiv = document.getElementById("total-guesses")
var userGuessDiv = document.getElementById("user-guesses")
    
    function playGame() {
        messageDiv.textContent = ""
        //this chooses a random word from gameBank array
        gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        //creates a number of incorrect guesses determined by length of the word ex:dog 3 chances
        //correct answers do not apply
        totalGuesses = gameWord.length
        //function see below
        createDashes();
        wordDiv.textContent = gameWordDashes
        totalGuessDiv.textContent = totalGuesses
        userGuessDiv.textContent = lettersGuessed.join("");
        console.log(gameWord);
    }

//creates dashes where it loops the gameWord (totalGuesses is the lenght here) 
// and creates _'s for every letter ex: dog will look like  _ _ _
function createDashes() {
    for (let i = 0; i < totalGuesses; i++) {
        gameWordDashes = gameWordDashes + "_"
    }
}

// event listener where as soon as a user presses and LIFTs the key on document.onkeyup
document.onkeyup = function (event) {
        // creates variable of event(above) which will be userKey 
    //and normalizes .toLowerCase incase its a capital letter ABC becomes abc
    var userKey = event.key.toLowerCase();
    messageDiv.textContent = ""

    //Condition if theres any gameword dashes left (for checkGameWon)
    if (totalGuesses > 0 && gameWordDashes.search("_") !== -1) {
    console.log(gameWordDashes);
    console.log(gameWordDashes.search("_") !== -1);
    //This is a Condition which checks if list letterGuessed has the UserKey in it already
    //*check if letter has already been used*
    if (lettersGuessed.indexOf(userKey) !== -1) {
        messageDiv.textContent = '"' + userKey + '" has already been picked'
    }else {
        //loops through the indices and check how many times the userKey is found in gameWord
        var indices =[];
        for (var i = 0; i <gameWord.length; i++) {
            if (gameWord[i] === userKey) indices.push(i);
        }

        //condition that checks if userskey is acually in the gameWord
        if (indices.length > 0) {
            //loops through and joins/puts  the letter pressed and replaces _'s with a correct letter *only if its part of the word*
            for (let j = 0; j < indices.length; j++) {
                var currentIndex = indices[j]
                gameWordDashes = gameWordDashes.split(""); //creates an array of the gameword (adds a comma after every letter/space as a string)
                gameWordDashes[currentIndex] = userKey
                gameWordDashes = gameWordDashes.join("");
                checkGameWon()
            }

            //records/saves the letters press by the user to letterGuessed empty array to stop from multiple same guesses
            lettersGuessed.push(userKey)

            wordDiv.textContent = gameWordDashes//writing to elemnts on html the as they go 
            totalGuessDiv.textContent = totalGuesses
            userGuessDiv.textContent = lettersGuessed.join("");
        
        } else {
            totalGuesses-- //subtracts 1 from the total number of guesses(which is the random word length)
            lettersGuessed.push(userKey); //records/saves the letters press by the user to letterGuessed empty array

            totalGuessDiv.textContent = totalGuesses
            messageDiv.textContent = '"' + userKey + '" is wrong... choose again!'
            checkGameLost();
        }
    }
// condition runs when gameWon or gameLost is triggered which hides elements
    } else {
        console.log("hit")//debugg where in the code, condition wasnt hitting
        checkGameWon();
        checkGameLost();
        wordDiv.classList.add("hide");
        totalGuessDiv.classList.add("hide");
        userGuessDiv.classList.add("hide");
    }
}
//checks if game is won 
function checkGameWon() {
    if (gameWordDashes === gameWord) {
        messageDiv.textContent = 'Winner! "' + gameWord + '" is the correct answer'
        correctSound.play();//plays sound when word is guessed
    }

}

//check if number of totalGuesses is less than or equal to zero to end(or else it goes on forever)
function checkGameLost() {
    if (totalGuesses <= 0) {
        messageDiv.textContent = 'Loser!...press Re-Play to try again. "' + gameWord + '" is the correct answer'
        wrongSound.play(); //plays sound when total guesses reaches zero
    }
}

//resets game...sets values to to begining of a game (not refresh page)
function reset() {
    gameWord = ""
    totalGuesses = 0
    lettersGuessed = []
    gameWordDashes = ""
    wordDiv.textContent = ""
    totalGuessDiv.textContent = ""
    userGuessDiv.textContent = ""
    wordDiv.classList.remove("hide");
    totalGuessDiv.classList.remove("hide");
    userGuessDiv.classList.remove("hide");
    playGame();
}

playGame();  //calling function playGame we created
console.log(gameWordDashes);
console.log(gameWord);

