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
//current word currently being played
var gameWord = ""
//gameWord length
var totalGuesses = 0
// list of letters the user has guessd
var letterGuessed = []
//word as dashes
var gameWordDashes = ""

var messageDiv = document.getElementById("message")
var wordDiv = document.getElementById("game-word")
var totalGuessDiv = document.getElementById("total-guesses")
var userGuessDiv = document.getElementById("user-guesses")


function playGame() {
    //this chooses a random word from gameBank array
    gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //creates a number of incorrect guesses determined by length of the word ex:dog 3 chances
    //correct answers do not apply
    totalGuesses = gameWord.length
    //function see below
    createDashes()
    wordDiv.textContent = gameWordDashes
    totalGuessDiv.textContent = totalGuesses
    userGuessDiv.textContent = letterGuessed.join("")

}

//creates dashes where it loops the gameWord (totalGuesses is the lenght here) 
// and creates _'s for every letter ex: dog : _ _ _
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
    
    //This is a Condition which checks if list letterGuessed has the UserKey in it already
    //*check if letter has already been used*
    if (letterGuessed.indexOf(userKey) !== -1) {
        messageDiv.textContent = (" You already picked " + userKey + "!");

    } else {
        //loops through the indices and check how many times the userKey is found in gameWord
        var indices = [];
        for (var i = 0; i < gameWord.length; i++) {
            if (gameWord[i] === userKey) indices.push(1)
        }

        //condition that checks if userskey is acually in the gameWord
        if (indices.length > 0) {

            //loops through and joins/puts  the letter pressed and replaces _'s with a correct letter *only if its part of the word*
            for (let j = 0; j < indices.length; j++) {
                var currentIndex = indices[j]
                gameWordDashes = gameWordDashes.split("") //creates an array of the gameword (adds a comma after every letter/space as a string)
                gameWordDashes[currentIndex] = userKey
                gameWordDashes = gameWordDashes.join("")
            }

            //records/saves the letters press by the user to letterGuessed empty array to stop from multiple same guesses
            letterGuessed.push(userKey)
            wordDiv.textContent = gameWordDashes
            totalGuessDiv.textContent = totalGuesses
            userGuessDiv.textContent = letterGuessed.join("")
        

        } else {
            totalGuesses-- //subtracts 1 from the total number of guesses(which is the random word length)
            letterGuessed.push(userKey); //records/saves the letters press by the user to letterGuessed empty array
            totalGuessDiv.textContent = totalGuesses
            messageDiv.textContent = userKey + " is wrong!... "
        }

        console.log(gameWord)
        console.log(totalGuesses); //guesses remaining

    }  
}




playGame(); //calling function playGame
console.log(gameWordDashes);
console.log(gameWord);
console.log(totalGuesses);
