import {Word} from "./Word.ts";
import {GameText} from "./game-text/GameText.ts";

export class GameBoard {
    public readonly boardElement: Element|null;
    private gameText: GameText;
    public renderedWords: Word[] = [];

    constructor() {
        this.gameText = new GameText();
        this.boardElement = document.getElementById('typing-test');
    }

    public setGameText(gameText: GameText) {
        this.gameText = gameText;
    }

    public getGameText() {
        return this.gameText;
    }

    public initialize(): void {
        this.setupGameBoard();
    }

    private setupGameBoard(): void {
        const gameElement = document.getElementById('typing-test');
        gameElement?.append(this.renderWordsContainer());
    }

    public renderWordsContainer(): Element {
        const wordsContainer = document.createElement('div');
        wordsContainer.id = 'words';
        wordsContainer.classList.add('flex', 'flex-wrap', 'gap-2');
        this.renderWords(wordsContainer);

        return wordsContainer;
    }

    private renderWords(wordsContainer: Element|null): void {
        this.gameText.getWords().forEach((word) => {
            wordsContainer?.append(word.getWordElement())
            word.renderLettersForWord(word.getWordElement());
            this.renderedWords.push(word)
        });
    }

    public clearBoard(): void {
        console.log('clearing board');
        const wordsElement = this.boardElement?.querySelector('#words');
        if(!wordsElement) return;
        wordsElement.remove();
    }
}