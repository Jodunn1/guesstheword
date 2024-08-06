
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const buttonPlayAgain = document.querySelector(".play-again");
const word = "magnolia";

//wipCircles = words in progress to represent each letter in word
placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter)
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guessInput = guessLetter.value;
    console.log(guessInput);
    guessLetter.value = "";
});