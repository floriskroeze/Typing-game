import {Difficulty, GameLength, Settings} from "../settings-screen/setupSettingsScreen.ts";
import {GameScreen, getScreen} from "../helpers/screen.ts";
import setupWords from "./setupWords.ts";

export type GameText = {
    text: string,
    difficulty: Difficulty;
}

export default function(settings: Settings) {
    if (!settings) throw new Error('No settings were selected.');

    if (!getScreen(GameScreen.GAMEBOARD)) throw new Error('Gameboard not found.');

    console.log("Gameboard initiated");
}

const setupGameText = async (difficulty: Difficulty) => {
    console.log("Selecting game text with difficulty: " + difficulty);
    const allGameTexts = await fetchGameText();
    const allGameTextsForDifficulty = getGameTextsWithDifficulty(allGameTexts, difficulty);

    setupWords(getRandomGameText(allGameTextsForDifficulty));
}

const fetchGameText = async () => {
    return fetch('data.ts').then(response => {
        if(!response.ok) throw new Error('Could not fetch game text.');
        return response.json();
    });
}

const getGameTextsWithDifficulty = (gameTexts: GameText[], difficulty: Difficulty): GameText[] => {
    return gameTexts.filter((gameText: GameText) => (gameText.difficulty === difficulty));
};

const getRandomGameText = (gameTexts: GameText[]): GameText => {
    return gameTexts[Math.floor(Math.random() * gameTexts.length)];
}

const setupGameClock = (gameLength: GameLength) => {
    console.log("Game clock initiated");
}