import {Word} from "./Word.ts";

export class GameText {
    private readonly words: Word[];

    constructor() {
        this.words = [];
    }

    public getWords(): Word[] {
        return this.words;
    }



    public static create(text: string) {
        const newGameText = new GameText();
        newGameText.setWords(text);
        return newGameText;
    }
}