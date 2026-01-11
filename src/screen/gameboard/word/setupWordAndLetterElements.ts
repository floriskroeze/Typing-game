import {getScreenElement} from "../../../helpers/screen.ts";
import {GameScreen} from "../../../constant/screens.ts";

export const setupWordsAndLetters = (words: string[]) => {
    words.forEach((word, index) => {
        const wordsWrapper = getScreenElement(GameScreen.GAMEBOARD)?.querySelector(".words-wrapper")
        const wordElement = createWordElement();
        if (index === 0) wordElement.classList.add('active');
        word.split('').forEach((letter, index) => wordElement.appendChild(createLetterElements(letter, index)));
        wordsWrapper?.appendChild(wordElement);
    })
}

const createWordElement = () => {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    return wordElement;
}

const createLetterElements = (letter: string, index: number) =>    {
    const letterElement = document.createElement('letter');
    letterElement.classList.add('letter');
    letterElement.id = index.toString();
    letterElement.innerText = letter;
    return letterElement;
}