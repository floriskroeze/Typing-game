import {displayScreen, GameScreen, getScreen} from "../../helpers/screen.ts";
import setupGameText, {createGameTextIterator, GameText} from "./word/setupGameText.ts";
import {setupWordsAndLetters} from "./word/setupWordAndLetterElements.ts";
import {Difficulty} from "../start-screen/setupStartScreen.ts";
import GameTextIterator from "../../iterator/GameTextIterator.ts";

export default function(difficulty: Difficulty): Promise<GameTextIterator> {
    if (!getScreen(GameScreen.GAMEBOARD)) throw new Error('Gameboard not found.');
    console.log("Initialising gameboard with settings: Difficulty: " + difficulty + ".");
    return setupGameText(difficulty).then(({words, gameText}: {words: string[], gameText: GameText}) => {
        console.log("Gametext: " + gameText.text);
        setupWordsAndLetters(words);
        displayScreen(GameScreen.GAMEBOARD);
        console.log("Gameboard initialised.");

        return createGameTextIterator(gameText);
    });
}