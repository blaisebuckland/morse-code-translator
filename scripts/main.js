import {Translator} from "./translatorClass.js"

// VARIABLES
const englishCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseCharacters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];
const translateToMorseBtn = document.querySelector("#translateToMorseBtn");
const translateToEnglishBtn = document.querySelector("#translateToEnglishBtn");
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const englishToMorseTranslator = new Translator(englishCharacters, morseCharacters, "", " ", " ", "/");
const morseToEnglishTranslator = new Translator(morseCharacters, englishCharacters, " ", "", "/", " ");

// FUNCTIONS
const translateEnglishToMorse = () => outputText.innerHTML = englishToMorseTranslator.translate(inputText.value);
const translateMorseToEnglish = () => outputText.innerHTML = morseToEnglishTranslator.translate(inputText.value);

// EVENT LISTENERS
translateToMorseBtn.addEventListener("click", translateEnglishToMorse);
translateToEnglishBtn.addEventListener("click", translateMorseToEnglish);