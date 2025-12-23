import {GameInstance} from "./game-instance/GameInstance.ts";
import {ScoreBoard} from "./score/ScoreBoard.ts";
import {Score} from "./score/Score.ts";
import {Input} from "./Input.ts";
import {StartButton} from "./button/StartButton.ts";
import {ResetButton} from "./button/ResetButton.ts";
import {Clock} from "./clock/Clock.ts";

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae est quis vehicula. Sed ut dui a mi sagittis dictum. Donec commodo rhoncus posuere. Morbi egestas ac odio faucibus finibus. Sed venenatis euismod sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sem ut lacinia tristique. Proin pellentesque, tortor et imperdiet dignissim, nisl orci venenatis lacus, sit amet sagittis diam sapien sit amet leo. Suspendisse egestas bibendum orci et fermentum.";


export class Game {
    private gameInstance?: GameInstance;
    private intervalID: number|undefined;

    constructor() {
        this.initialize();
    }

    public initialize(): void {
        this.setupStartButton();
    }

    public startGame(e: Event): void {
        e.preventDefault();

        StartButton.destroyStartButton();

        this.gameInstance = new GameInstance();
        Clock.showClock();

        this.intervalID = setInterval(() => {
            if (this.gameInstance?.clock.getTimeLeft() === 0) {
                this.endGame();
            }
        }, 1000)
    }

    public endGame(): void {
        this.gameInstance?.endGame();
        this.gameInstance?.gameBoard.clearBoard();
        Clock.hideClock();
        ScoreBoard.showScoreBoard();
        ScoreBoard.displayResults(Score.calculate(this.gameInstance?.mistakeCount, this.gameInstance?.totalCharactersTyped, this.gameInstance?.GAME_TIME));
        clearInterval(this.intervalID);
        this.setupResetButton();
        this.gameInstance = undefined;
    }

    public handleGameReset(e: Event): void {
        e.preventDefault();
        ScoreBoard.clearResults();
        ResetButton.destroyResetButton();
        this.startGame(e);
    }

    public setupStartButton(): void {
        const gameElement = document.getElementById('typing-test');
        const startButton = StartButton.create(this.startGame.bind(this));

        if (startButton?.startButtonElement === undefined) return;

        gameElement?.append(startButton.startButtonElement);
    }

    public setupResetButton(): void {
        const gameElement = document.getElementById('typing-test');
        const resetButton = ResetButton.create(this.handleGameReset.bind(this));
        if (resetButton?.resetButtonElement === undefined) return;

        gameElement?.append(resetButton.resetButtonElement);
    }
}