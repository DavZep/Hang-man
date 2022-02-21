// var movieList = ["ratatouille", "dune", "spiderman", "venom", "space jam",
// "toy story", "godzilla", "wonder woman", "borat", "star wars", "the hunger games",
// "ted", "tron", "inception", "avatar", "jackass"]

// var win = 0;
// var losses = 0;
// var guesses = 3;
// underScoreString = [];

// // choose random word from movieList
// var randomWord = movieList[Math.floor(Math.random() * movieList.length)];

// // display word with "_" spaces
//     for(var i = 0; i < randomWord.length; i++){
//         underScoreString.push("_");
//         // alert(randomWord);
//         }

// // check if letter pressed is an actual letter in the randomWord name. also display letters used as "Letters guessed"
// document.onkeyup = function (e) {
//     var userAnswer = e.key.toLowerCase();
// }
// //if letter press is not part of randomWord name 

// //display Guesses remaining:

// //reset button
// function reset() {
//     win = 0;
//     losses =0;
//     guesses = [];
// }
// Class Breakdown----------------------
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
//collection of words used for game
var wordBank = ["ratatouille", "dune", "spiderman", "venom", "space jam",
"toy story", "godzilla", "wonder woman", "borat", "star wars", "the hunger games",
"ted", "tron", "inception", "avatar", "jackass"]
//current word played
var gameWord = ""
//gameWord length
var totalGuesses = 0
// list of letters the user has guessd
var letterGuess = []
//word as dashes
var wordDashes = ""


//
function playGame() {
    gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    totalGuesses = gameWord.length;
    createDashes()
}
//creates dashes
function createDashes() {
    for (let i = 1; i < totalGuesses; i++) {
    wordDashes = wordDashes + "_ ";
    }
}
playGame();
console.log(wordDashes);
console.log(gameWord);
console.log(totalGuesses);









