import GameState from "../state/GameState.ts";
import Clock from "../observer/Clock.ts";
import setupGameBoard from "../screen/gameboard/setupGameBoard.ts";
import {Settings} from "../screen/start-screen/setupStartScreen.ts";
import {ClockDisplay} from "../dom/ClockDisplay.ts";
import {GameText} from "../screen/gameboard/word/setupGameText.ts";

export default class GameRound {
    static instance: GameRound;
    public readonly clock: Clock;
    public readonly gameState: GameState;
    public gameText: GameText;

    constructor(settings: Settings) {
        this.clock = new Clock(settings.gameLength);
        this.gameState = new GameState();
        this.gameText = {
            text: '',
            difficulty: 1
        };
    }

    setGameText(gameText: GameText) {
        this.gameText = gameText;
    }

    getGameText() {
        return this.gameText;
    }

    startRound() {
        this.clock.start();

    }

    endRound() {

    }

    resetRound() {

    }

    static getInstance() {
        return this.instance;
    }

    static init(settings: Settings) {
        this.instance = new GameRound(settings);
        new ClockDisplay(this.instance.clock);
        setupGameBoard(settings.difficulty);
        console.log('GameRound initialized');
    }
}