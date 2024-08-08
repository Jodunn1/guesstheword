
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const buttonPlayAgain = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];

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
    messages.innerText = "";
    playerInput(input);
});

const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        messages.innerText = "You have to input a letter to guess";
    } else if (input > 1) {
        messages.innerText = "You are only able to input one letter at a time. Please try again.";
    } else if (!input.match(acceptedLetter)) {
        messages.innerText = "Please try and submit a letter a-z";
    } else {
        return input;
    }
}