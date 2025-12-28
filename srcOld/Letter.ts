export class Letter {
    public letter: string;
    private letterElement: Element;

    constructor() {
        this.letter = '';
        this.letterElement = document.createElement('letter');
    }

    public static create(letter: string): Letter {
        const newLetter = new Letter();
        newLetter.letter = letter;
        newLetter.letterElement = Letter.createLetterElement(letter);
        return newLetter;
    }

    public static createLetterElement(letter: string): Element {
        const letterElement = document.createElement('letter');
        letterElement.innerText = letter;
        return letterElement;
    }

    public getLetterElement(): Element {
        return this.letterElement;
    }

    public isCorrect(input: string): boolean {
        return (input === this.letter) ? this.setLetterCorrect() : this.setLetterIncorrect();
    }

    private setLetterCorrect(): boolean {
        this.letterElement.classList.add('text-green-500');
        return true;
    }

    private setLetterIncorrect(): boolean {
        this.letterElement.classList.add('text-red-500');
        return false;
    }
}