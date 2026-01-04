import GameState from "./GameState.ts";
import Clock from "../observer/Clock.ts";
import setupGameBoard from "../screen/gameboard/setupGameBoard.ts";
import {ClockDisplay} from "../UI/display/ClockDisplay.ts";
import Input from "../observer/Input.ts";
import InputValidator from "../validator/InputValidator.ts";

import {GameLength, Settings} from "../constant/settings.ts";

export default class GameRound {
    public readonly gameState: GameState;

    constructor(settings: Settings) {
        this.clock = new Clock(GameLength[settings.gameLength]);
        this.gameState = new GameState();
    }

    startRound() {
        Input.getInstance().registerToDocument();
    }

    endRound() {
        Input.getInstance().unregisterFromDocument();
    }

    init(settings: Settings) {
        new ClockDisplay(this.clock);
        setupGameBoard(settings.difficulty).then((iterator) => {
            InputValidator.getInstance().setGameTextIterator(iterator);
            this.startRound();
        });
    }
}