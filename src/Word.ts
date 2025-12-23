import {Letter} from "./Letter.ts";

export class Word {
    private wordElement: Element;
    private readonly letters: Letter[] = [];

    constructor() {
        this.wordElement = document.createElement('div');
    }

    public setLetters(word: string) {
        const arrayOfLetters = word.split('');
        arrayOfLetters.forEach(letter => {
            this.letters.push(Letter.create(letter));
        })
    }

    public getLetters() {
        return this.letters;
    }

    public static create(word: string, index?: number) {
        const newWord = new Word();
        newWord.setLetters(word);
        newWord.createWordElement(index);
        return newWord;
    }

    public createWordElement(index?: number): void {
        this.wordElement.classList.add('word');
        if (index === 0) this.wordElement.classList.add('active');
    }

    public getWordElement(): Element {
        return this.wordElement;
    }

    public renderLettersForWord(wordElement: Element|null): void {
        this.getLetters().forEach(letter => {
            this.wordElement?.appendChild(letter.getLetterElement());
        });
    }
}

// import {Letter} from "./Letter.ts";
//
// export class Word {
//     private readonly letters: Letter[] = [];
//     private wordElement: Element|null = null;
//
//     public setLetters(word: string) {
//         const arrayOfLetters = word.split('');
//         arrayOfLetters.forEach(letter => {
//             this.letters.push(Letter.create(letter));
//         })
//     }
//
//     public getLetters() {
//         return this.letters;
//     }
//
//     public static create(word: string) {
//         const newWord = new Word();
//         newWord.setLetters(word);
//         return newWord;
//     }
//
//     public getWordElement() {
//         return this.wordElement;
//     }
//
//     public createWordElement(index: number): Element {
//         const wordElement = document.createElement('div');
//         if (index === 0) wordElement.classList.add('active');
//         wordElement.classList.add('word');
//
//         return wordElement;
//     }
//
//     public setupWord():Element|null {
//         const letterElements = this.word.getLetters().map(letter => {
//             const letterElement = letter.getLetterElement();
//             wordElement.appendChild(letterElement);
//             return letterElement
//         });
//
//         return this.wordElement;
//     }
// }