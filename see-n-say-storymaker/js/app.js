// // Assignment 1 | COMP1073 Client-Side JavaScript

// Arrays containing words
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
let arr = [];
// Function to generate a random word from an array
function getRandomWord(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// Function to generate and display a random story
function generatenoun() {
	noun = getRandomWord(nouns);
	const storyText = document.getElementById("storyText");
	speakNow(`${noun}`);
	return storyText.innerText = `${noun}`;
}

function generateverb() {
	verb = getRandomWord(verbs);
	const storyText = document.getElementById("storyText");
	speakNow(`${verb}`);
	return storyText.innerText = `${verb}`;
}
function generateadjective() {
	adjective = getRandomWord(adjectives);
	const storyText = document.getElementById("storyText");
	speakNow(`${adjective}`);
	return storyText.innerText = `${adjective}`;
}
function generatenoun2() {
	noun2 = getRandomWord(noun2s);
	const storyText = document.getElementById("storyText");
	speakNow(`${noun2}`);
	return storyText.innerText = `${noun2}`;
}
function generateplace() {
	place = getRandomWord(places);
	const storyText = document.getElementById("storyText");
	speakNow(`${place}`);
	return storyText.innerText = `${place}`;
}



function generateStory() {
	nounnw = generatenoun();
	verbnw = generateverb();
	adjnw = generateadjective();
	noun2nw = generatenoun2();
	placenw = generateplace();
	const storyText = document.getElementById("storyText");
	value = `${nounnw} ${verbnw} ${adjnw} ${noun2nw} ${placenw}`
	arr.push(value);
	return storyText.innerText = `${nounnw} ${verbnw} ${adjnw} ${noun2nw} ${placenw}`;

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
	const textToSpeak = arr[arr.length - 1];
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
document.getElementById("nounButton").addEventListener("click", generatenoun);
document.getElementById("verbButton").addEventListener("click", generateverb);
document.getElementById("adjectiveButton").addEventListener("click", generateadjective);
document.getElementById("noun2Button").addEventListener("click", generatenoun2);
document.getElementById("placeButton").addEventListener("click", generateplace);
document.getElementById("generateButton").addEventListener("click", generateStory);
document.getElementById("resetButton").addEventListener("click", resetStory);
document.getElementById("speakButton").addEventListener("click", speakStory);
