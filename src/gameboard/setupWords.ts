import {GameText} from "./setupGameBoard.ts";

export default function(gameText: GameText) {
    const words = getWordsAndLetters(gameText.text);
}

const getWordsAndLetters = (text: string): [] => {
    const array = []
    const arrayOfWords = text.split(' ');

    arrayOfWords.forEach((word, index) => {
        const newWord = word;
        const space = " ";

        array.push(newWord);

        if (index === arrayOfWords.length - 1) return;

        array.push(space);
    });
}