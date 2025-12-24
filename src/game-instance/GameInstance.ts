import {GameText} from "../GameText.ts";
import {GameBoard} from "../GameBoard.ts";
import {Clock} from "../model/Clock.ts";
import {Input} from "../Input.ts";
import {GameState} from "../model/GameState.ts";
import {Game} from "../Game.ts";
import {Score} from "../score/Score.ts";

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae est quis vehicula. Sed ut dui a mi sagittis dictum. Donec commodo rhoncus posuere. Morbi egestas ac odio faucibus finibus. Sed venenatis euismod sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sem ut lacinia tristique. Proin pellentesque, tortor et imperdiet dignissim, nisl orci venenatis lacus, sit amet sagittis diam sapien sit amet leo. Suspendisse egestas bibendum orci et fermentum.";
interface IGameInstance {
    gameTime: GameTime;

}

export type GameTime = 120 | 90 | 60 | 30 | 20 | 10;

export class GameInstance {
    public inputElement: HTMLTextAreaElement;

    constructor(private _gameTime: GameTime = 20, public _clock: Clock = new Clock(), public _gameBoard: GameBoard = new GameBoard(), public _gameState: GameState = new GameState()) {
        this.inputElement = Input.createInputField();
        this.start();
    }

    get gameTime(): GameTime {
        return this._gameTime;
    }

    set gameTime(value: GameTime) {
        this._gameTime = value;
    }

    get gameBoard(): GameBoard {
        return this._gameBoard;
    }

    get clock(): Clock {
        return this._clock;
    }

    get gameState(): GameState {
        return this._gameState;
    }

    public start(): void {
        this.gameBoard.setGameText(GameText.create(testText));
        this.gameBoard.initialize();
        this.gameBoard.boardElement?.append(this.inputElement);
        Input.setupInput(this);
        this.inputElement.focus();
        document.addEventListener('click', this.focusInputField.bind(this));
        this.clock.time = this.gameTime;
        this.clock.start(this.endGame.bind(this));
    }

    public endGame(): void {
        Game.endGame(Score.calculate(this.gameState?.mistakeCount, this.gameState?.totalCharactersTyped, this.gameTime));
        document.removeEventListener('click', this.focusInputField);
    }

    private focusInputField(): void {
        this.inputElement.focus();
    }
}