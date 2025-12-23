import {GameText} from "../GameText.ts";
import {GameBoard} from "../GameBoard.ts";
import {Clock} from "../clock/Clock.ts";
import {Input} from "../Input.ts";

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae est quis vehicula. Sed ut dui a mi sagittis dictum. Donec commodo rhoncus posuere. Morbi egestas ac odio faucibus finibus. Sed venenatis euismod sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sem ut lacinia tristique. Proin pellentesque, tortor et imperdiet dignissim, nisl orci venenatis lacus, sit amet sagittis diam sapien sit amet leo. Suspendisse egestas bibendum orci et fermentum.";

export class GameInstance {
    public readonly GAME_TIME = 20;
    public readonly gameBoard: GameBoard;
    public inputElement: HTMLTextAreaElement;
    public clock: Clock;
    public currentWordIndex: number;
    public currentLetterIndex: number;
    public mistakeCount: number;
    public totalCharactersTyped: number;

    constructor() {
        this.clock = new Clock();
        this.gameBoard = new GameBoard();
        this.inputElement = Input.createInputField();
        this.currentWordIndex = 0;
        this.currentLetterIndex = 0;
        this.mistakeCount = 0;
        this.totalCharactersTyped = 0;

        this.clock.setClockElementTime(this.GAME_TIME);
        this.start();
    }

    public start(): void {
        this.gameBoard.setGameText(GameText.create(testText));
        this.gameBoard.initialize();
        this.gameBoard.boardElement?.append(this.inputElement);
        Input.setupInput(this);
        this.inputElement.focus();
        document.addEventListener('click', this.focusInputField.bind(this));
        this.clock.start();
    }

    public endGame(): void {
        document.removeEventListener('click', this.focusInputField);
    }

    private focusInputField(): void {
        this.inputElement.focus();
    }
}