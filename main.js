// DOM Elements
const englishCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseCharacters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];
const translateToMorseBtn = document.querySelector("#translateToMorseBtn");
const translateToEnglishBtn = document.querySelector("#translateToEnglishBtn");
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");

class Translator {
    constructor(inputAlphabet, outputAlphabet, splittingCharacter, joiningCharacter) {
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
        this.splittingCharacter = splittingCharacter;
        this.joiningCharacter = joiningCharacter;
    }

    translateWord() {
        let inputWord = inputText.value;
        let outputWord = "";
        const characters = inputWord.toUpperCase().split(this.splittingCharacter);
        characters.forEach((character) => {
            if (this.inputAlphabet.includes(character)) {
                const index = this.inputAlphabet.indexOf(character);
                outputWord += this.joiningCharacter + this.outputAlphabet[index];
            } else {
                outputWord = "invalid character used";
            }  
        })
        outputText.innerHTML = outputWord;
    }
}

const translateEnglishToMorse = () => {
    new Translator(englishCharacters, morseCharacters, "", " ").translateWord();
}

const translateMorseToEnglish = () => {
    new Translator(morseCharacters, englishCharacters, " ", "").translateWord();
}

// EVENT LISTENERS
translateToMorseBtn.addEventListener("click", translateEnglishToMorse);
translateToEnglishBtn.addEventListener("click", translateMorseToEnglish);