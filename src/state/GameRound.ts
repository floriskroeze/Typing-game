import GameState from "./GameState.ts";
import Timer from "../observer/Timer.ts";
import setupGameBoard from "../screen/gameboard/setupGameBoard.ts";
import {ClockDisplay} from "../UI/display/ClockDisplay.ts";
import Input from "../observer/Input.ts";
import InputHandler from "../handler/InputHandler.ts";

import {GameLength, Settings} from "../constant/settings.ts";

export default class GameRound {
    public readonly gameState: GameState;

    constructor(settings: Settings) {
        this.clock = new Timer(GameLength[settings.gameLength]);
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
            InputHandler.getInstance().setGameTextIterator(iterator);
            this.startRound();
        });
    }
}