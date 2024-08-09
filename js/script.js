
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const buttonPlayAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];
const remainingGuesses = 8;

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("/n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
};

getWord();

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

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guessInput = guessLetter.value;
    console.log(guessInput);
    guessLetter.value = "";
    messages.innerText = "";
    guessLetter.value = "";
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
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase()
    if (guessedLetters.includes(guess)) {
        messages.innerText = "You've already guessed that letter! Try again";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        updateGuessesRemaining(guess);
        updatedPlayerGuesses();
    }
};

const updatedPlayerGuesses = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

updatedWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        messages.innerText = `Unforunately the word does not ${guess}. Try again`;
        remainingGuesses -= 1;
    } else {
        messages.innerText = `Good guess! The word has the letter ${guess}`;
    }
    if (remainingGuesses === 0) {
        messages.innerHTML = `The game is now over! The word was <span class="highlight"> ${word} </span>. Better luck next time!`;
    } else if (remainingGuesses === 1) {
        remainingGuessSpan.innerText = `You have ${remainingGuesses} remaining!`;
    } else {
        remainingGuessSpan.innerText = `${remainingGuesses} guesses remaining`;
    }
};

const checkIfWin = function () {
    if (wordInProgress.innerText === word.toUpperCase()) {
        messages.classList.add("win");
        messages.innerHTML = `<p class="highlight"> You guessed the correct word! Congrats! </p>`;
    }
};

