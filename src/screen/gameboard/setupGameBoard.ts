import {displayScreen, GameScreen, getScreen} from "../../helpers/screen.ts";
import setupGameText from "./word/setupGameText.ts";
import setupWordAndLetterElements from "./word/setupWordAndLetterElements.ts";
import {Difficulty} from "../start-screen/setupStartScreen.ts";

export default function(difficulty: Difficulty ) {
    if (!getScreen(GameScreen.GAMEBOARD)) throw new Error('Gameboard not found.');
    console.log("Initialising gameboard with settings: Difficulty: " + difficulty + ".");
    setupGameText(difficulty).then((gameText: string[]) => {
        setupWordAndLetterElements(gameText);
        displayScreen(GameScreen.GAMEBOARD);
    });
    console.log("Gameboard initialised.");
}