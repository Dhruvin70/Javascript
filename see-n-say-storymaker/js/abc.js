const nouns = ["cat", "dog", "tree", "house", "car"];
const verbs = ["runs", "jumps", "swims", "flies", "sleeps"];
const adjectives = ["happy", "beautiful", "fast", "tall", "clever"];
const noun2s = ["bird", "flower", "book", "mountain", "river"];
const places = ["park", "beach", "forest", "mountain", "city"];

// Variables to store selected words
let noun = "";
let verb = "";
let adjective = "";
let noun2 = "";
let place = "";

// Function to generate a random word from an array
function getRandomWord(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to generate and display a random story
function generateStory() {
    noun = getRandomWord(nouns);
    verb = getRandomWord(verbs);
    adjective = getRandomWord(adjectives);
    noun2 = getRandomWord(noun2s);
    place = getRandomWord(places);

    const storyText = document.getElementById("storyText");
    storyText.innerText = `${noun} ${verb} ${adjective} ${noun2} ${place}`;

    return `${noun} ${verb} ${adjective} ${noun2} ${place}`;
}

// Function to reset the story
function resetStory() {
    noun = "";
    verb = "";
    adjective = "";
    noun2 = "";
    place = "";

    const storyText = document.getElementById("storyText");
    storyText.innerText = "";
}

// Function to speak the story aloud
function speakStory() {
    const textToSpeak = generateStory();
    speakNow(textToSpeak);
}

// Function to speak the text using the Text-to-Speech API
function speakNow(text) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-US';
        speech.volume = 1.0;
        speech.rate = 1.0;
        speech.pitch = 1.0;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Sorry, your browser doesn't support Text-to-Speech.");
    }
}

// Event listeners for buttons
document.getElementById("nounButton").addEventListener("click", generateStory);
document.getElementById("verbButton").addEventListener("click", generateStory);
document.getElementById("adjectiveButton").addEventListener("click", generateStory);
document.getElementById("noun2Button").addEventListener("click", generateStory);
document.getElementById("placeButton").addEventListener("click", generateStory);
document.getElementById("generateButton").addEventListener("click", generateStory);
document.getElementById("resetButton").addEventListener("click", resetStory);
document.getElementById("speakButton").addEventListener("click", speakStory);
