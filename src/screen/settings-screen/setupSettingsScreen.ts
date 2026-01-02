import setupGameBoard from "../gameboard/setupGameBoard.ts";
import {displayScreen, GameScreen, getScreen, hideScreen} from "../../helpers/screen.ts";

export enum Difficulty {
    EASY = 1,
    MEDIUM = 2,
    HARD = 3
}

export enum GameLength {
    TEN_SECONDS = 10,
    HALF_MINUTE = 30,
    ONE_MINUTE = 60,
    TWO_MINUTES = 120,
}

export type Settings = {
    difficulty: Difficulty,
    gameLength: GameLength
}

const exampleSettings: Settings = {
    difficulty: Difficulty.MEDIUM,
    gameLength: GameLength.TEN_SECONDS
}

export default function() {
    if (!getScreen(GameScreen.SETTINGS)) throw new Error('Settings screen not found.');

    displayScreen(GameScreen.SETTINGS);
    console.log("Settings screen initiated");
    console.log('Settings selected');
    setupGameBoard(exampleSettings);
    hideScreen(GameScreen.SETTINGS);
}