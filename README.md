# Morse Code Translator

This translator can translate words from English to Morse code and vice versa. It is my first project using JavaScript classes and unit testing.

## Technologies
* JavaScript
* HTML
* CSS
* Jest

## Skills
* JavaScript classes
* Unit testing with Jest

## Images
<img src="https://github.com/blaisebuckland/morse-code-translator/blob/main/images/englishToMorse.png" alt="game-image-1" width=600>
<img src="https://github.com/blaisebuckland/morse-code-translator/blob/main/images/morseToEnglish.png" alt="game-image-2" width=600>


## Functionality
* The user types either a) a word in English and presses "translate to Morse" or b) a word in morse and presses "translate to English"
* The result is then displayed in the output box

## Testing
* The translator was testing using Jest. The tests cover the input of single characters, words and sentences. The tests cover both English to Morse and Morse to English translations. 
* Testing revealed a problem with translate method, in cases where a word contained the same letter more than once, it was adding a space after every character (including the last character in a word). This meant that the Morse translation was in the wrong format to then be able to be translated back to English. This was resolved by using the trim() method instead of checking the index of the letter to determine whether a space should be added.

## Links
* [GitHub repository](https://github.com/blaisebuckland/morse-code-translator) 
* [The translator](https://blaisebuckland.github.io/morse-code-translator/)