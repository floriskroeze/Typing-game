import {GameLength, Settings} from "../settings-screen/setupSettingsScreen.ts";
import {displayScreen, GameScreen, getScreen} from "../helpers/screen.ts";
import setupGameText from "./word/setupGameText.ts";
import setupWordAndLetterElements from "./word/setupWordAndLetterElements.ts";

export default function(settings: Settings) {
    if (!settings) throw new Error('No settings were selected.');
    if (!getScreen(GameScreen.GAMEBOARD)) throw new Error('Gameboard not found.');
    console.log("Initialising gameboard with settings: Difficulty: " + settings.difficulty + ". Time: " + settings.gameLength  + ".");
    setupGameText(settings.difficulty).then((gameText: string[]) => {
        setupWordAndLetterElements(gameText);
        setupGameClock(settings.gameLength);
        displayScreen(GameScreen.GAMEBOARD);
    });

}

const setupGameClock = (gameLength: GameLength) => {
    console.log("Game clock initiated");
}