export const LETTER_ELEMENT = 'letter';

export const getLetterElements = () => document.querySelectorAll(LETTER_ELEMENT);
export const getLetterElementByIndex = (index: number) => getLetterElements()[index];
export const setLetterElementCorrectState = (index: number, correct: boolean) => correct ? getLetterElementByIndex(index).classList.add('correct') : getLetterElementByIndex(index).classList.add('incorrect');