import {GameInstance} from "./game-instance/GameInstance.ts";
import {ScoreBoard} from "./score/ScoreBoard.ts";
import {StartButton} from "./button/StartButton.ts";
import {ResetButton} from "./button/ResetButton.ts";
import {GameScore} from "./score/Score.ts";

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae est quis vehicula. Sed ut dui a mi sagittis dictum. Donec commodo rhoncus posuere. Morbi egestas ac odio faucibus finibus. Sed venenatis euismod sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sem ut lacinia tristique. Proin pellentesque, tortor et imperdiet dignissim, nisl orci venenatis lacus, sit amet sagittis diam sapien sit amet leo. Suspendisse egestas bibendum orci et fermentum.";

export class Game {
    public static initialize(): void {
        this.setupStartButton();
    }

    public static startGame(e: Event): void {
        e.preventDefault();
        StartButton.destroyStartButton();

        new GameInstance();
    }

    public static endGame(score: GameScore): void {
        ScoreBoard.displayResults(score);
        this.setupResetButton();
    }

    public static handleGameReset(e: Event): void {
        e.preventDefault();
        ScoreBoard.clearResults();
        ResetButton.destroyResetButton();
        this.startGame(e);
    }

    public static setupStartButton(): void {
        const gameElement = document.getElementById('typing-test');
        const startButton = StartButton.create(this.startGame.bind(this));

        if (startButton?.startButtonElement === undefined) return;

        gameElement?.append(startButton.startButtonElement);
    }

    public static setupResetButton(): void {
        const gameElement = document.getElementById('typing-test');
        const resetButton = ResetButton.create(this.handleGameReset.bind(this));
        if (resetButton?.resetButtonElement === undefined) return;

        gameElement?.append(resetButton.resetButtonElement);
    }
}