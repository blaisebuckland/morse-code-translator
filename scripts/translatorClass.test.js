import { Translator } from "./translatorClass.js";

const englishCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseCharacters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];
const englishToMorseTranslator = new Translator(englishCharacters, morseCharacters, "", " ", " ", "/");
const morseToEnglishTranslator = new Translator(morseCharacters, englishCharacters, " ", "", "/", " ");

it("Should return a string when English is trsanslated to Morse", () => {
    expect(typeof(englishToMorseTranslator.translate("a"))).toBe("string");
})

it("Should return a string when Morse is trsanslated to English", () => {
    expect(typeof(morseToEnglishTranslator.translate(".-"))).toBe("string");
})

it("Should correctly replace a letter with it's Morse equivalent", () => {
    expect(englishToMorseTranslator.translate("a")).toBe(".-");
})

it("Should correctly replace a Morse letter with it's alphabet equivalent", () => {
    expect(morseToEnglishTranslator.translate("-...")).toBe("b");
})

it("Should correctly translate a word from English to Morse", () => {
    expect(englishToMorseTranslator.translate("hellO")).toBe(".... . .-.. .-.. ---");
})

it("Should correctly translate a word from Morse to English", () => {
    expect(morseToEnglishTranslator.translate(".--. .. -. -.-")).toBe("pink");
})

it("Should correctly translate a sentence from English to Morse", () => {
    expect(englishToMorseTranslator.translate("Hi, how are you?")).toBe(".... .. --..--/.... --- .--/.- .-. ./-.-- --- ..- ..--..");
})

it("Should correctly translate a sentence from Morse to English", () => {
    expect(morseToEnglishTranslator.translate(".-- . .-.. -.-. --- -- ./.... --- -- .")).toBe("welcome home");
})

it("Should translate correctly from English regardless of letter casing", () => {
    expect(englishToMorseTranslator.translate("mAgnIfiCent")).toBe("-- .- --. -. .. ..-. .. -.-. . -. -");
})