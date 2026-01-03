import GameState from "../state/GameState.ts";
import Clock from "../observer/Clock.ts";
import setupGameBoard from "../screen/gameboard/setupGameBoard.ts";
import {Settings} from "../screen/start-screen/setupStartScreen.ts";
import {ClockDisplay} from "../dom/ClockDisplay.ts";
import Input from "../observer/Input.ts";
import InputValidator from "../validator/InputValidator.ts";

export default class GameRound {
    static instance: GameRound;
    public readonly clock: Clock;
    public readonly gameState: GameState;

    constructor(settings: Settings) {
        this.clock = new Clock(settings.gameLength);
        this.gameState = new GameState();
    }

    startRound() {
        this.clock.start();
        Input.getSingleton().registerToDocument();
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
        setupGameBoard(settings.difficulty).then((iterator) => {
            InputValidator.getInstance().setGameTextIterator(iterator);
            this.getInstance().startRound();
        });

        console.log('GameRound initialized');
    }
}