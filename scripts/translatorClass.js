export class Translator {
    constructor(inputAlphabet, outputAlphabet, characterSeparator, characterJoiner, wordSeparator, wordJoiner) {
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
        this.characterSeparator = characterSeparator;
        this.characterJoiner = characterJoiner;
        this.wordSeparator = wordSeparator;
        this.wordJoiner = wordJoiner;
    }

    translate(inputText) {
        let outputText = "";
        const wordsArr = inputText.toUpperCase().split(this.wordSeparator);
        wordsArr.forEach((word) => {
            const charactersArr = word.toUpperCase().split(this.characterSeparator);
            charactersArr.forEach((character) => {
                if (this.inputAlphabet.includes(character)) {
                    const index = this.inputAlphabet.indexOf(character);
                    outputText += this.outputAlphabet[index] + this.characterJoiner;
                } else {
                    outputText = "invalid character used";
                }
            })
            // remove the space from the end of the word
            outputText = outputText.trim(); 
            // add a word joining character (e.g. a space or a slash, unless it is the last word
            if(wordsArr.indexOf(word) < (wordsArr.length -1)) {
                outputText += this.wordJoiner;
            }
        })
        return outputText.toLowerCase();
    }

}