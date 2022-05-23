// Create an object for the morse alphabet and the English alphabet

const englishCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseCharacters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];

// Create a translator class. This should contain the input and output variables and should have a method which translates from alphabet1 to alphabet2
class Translator {
    constructor(inputAlphabet, outputAlphabet, splittingCharacter, joiningCharacter) {
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
        this.splittingCharacter = splittingCharacter;
        this.joiningCharacter = joiningCharacter;
    }

    translateWord(inputWord) {
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
        console.log(outputWord);
        outputWord = "";
    }
}

const englishToMorse = new Translator(englishCharacters, morseCharacters, "", " ");

englishToMorse.translateWord("HELLO");

const morseToEnglish = new Translator(morseCharacters, englishCharacters, " ", "");

morseToEnglish.translateWord("-... -.-- .");

// Create an extentsion of the translator class for EnglishToMorse and MorseToEnglish --> here we can define which will be alphabet1 and which will be alphabet2

// 

// Now make the input come from an input box on in the HTML page and display the output in an output box when a button is clicked. Then reset the input and output when a new word is started