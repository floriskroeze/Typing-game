import {displayScreen, getScreenElement} from "../../helpers/screen.ts";
import setupGameText, {createGameTextIterator, GameText} from "./word/setupGameText.ts";
import {setupWordsAndLetters} from "./word/setupWordAndLetterElements.ts";
import GameTextIterator from "../../iterator/GameTextIterator.ts";

import {KeyOfDifficulty} from "../../constant/settings.ts";
import {GameScreen} from "../../constant/gamescreens.ts";

export default function(difficulty: KeyOfDifficulty): Promise<GameTextIterator> {
    if (!getScreenElement(GameScreen.GAMEBOARD)) throw new Error('Gameboard not found.');
    console.log("Initialising gameboard with settings: Difficulty: " + difficulty + ".");
    return setupGameText(difficulty).then(({words, gameText}: {words: string[], gameText: GameText}) => {
        console.log("Gametext: " + gameText.text);
        setupWordsAndLetters(words);
        displayScreen(GameScreen.GAMEBOARD);
        console.log("Gameboard initialised.");

        return createGameTextIterator(gameText);
    });
}