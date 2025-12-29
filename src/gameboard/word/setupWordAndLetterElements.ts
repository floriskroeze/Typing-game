import {GameScreen, getScreen} from "../../helpers/screen.ts";

export default function(words: string[]) {
    words.forEach((word, index) => {
        const wordsWrapper = getScreen(GameScreen.GAMEBOARD)?.querySelector(".words-wrapper")
        const wordElement = createWordElement();
        if (index === 0) wordElement.classList.add('active');
        word.split('').forEach(letter => wordElement.appendChild(createLetterElements(letter)));
        wordsWrapper?.appendChild(wordElement);
    })
}

const createWordElement = () => {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    return wordElement;
}

const createLetterElements = (letter: string) =>    {
    const letterElement = document.createElement('letter');
    letterElement.classList.add('letter');
    letterElement.innerText = letter;
    return letterElement;
}