# Morse Code Translator

This translator can translate words, numbers and simple punctuation from English to Morse code and vice versa. It is my first project using JavaScript classes and unit testing. 

Separating out and purifying functions in order to be able to test them was challenging but made the code cleaner. The tests also revealed a bug that I hadn't originally spotted in the browser, which I was then able to fix.

## Technologies
* JavaScript
* HTML
* CSS
* Jest

## Skills
* JavaScript classes
* Unit testing with Jest

## Images
<img src="https://github.com/blaisebuckland/morse-code-translator/blob/main/images/englishToMorse.png" alt="game-image-1" width=400>
<img src="https://github.com/blaisebuckland/morse-code-translator/blob/main/images/morseToEnglish.png" alt="game-image-2" width=800>


## Functionality
* The user types either a word/number/sentence in English or Morse and then presses either "Translate to Morse" or "Translate to English"
* The result is then displayed in the output box

## Testing
* The translator was testing using Jest. The tests cover the input of single characters, words and sentences. The tests cover both English to Morse and Morse to English translations. 
* Testing revealed a problem with translate method, in cases where a word contained the same letter more than once, it was adding a space after the final character in a word. This meant that the Morse translation was in the wrong format to then be able to be translated back to English. The issue was that by checking the index of the letter to determine whether a space should be added, it did not take in to account multiple use of the same letter. The issue was resolved by replacing this with the trim() method.

## Links
* [GitHub repository](https://github.com/blaisebuckland/morse-code-translator) 
* [The translator](https://blaisebuckland.github.io/morse-code-translator/)