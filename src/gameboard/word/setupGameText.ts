import setupWordsAndLetters from "./setupWordAndLetterElements.ts";
import {Difficulty} from "../../settings-screen/setupSettingsScreen.ts";

export type GameText = {
    text: string,
    difficulty: Difficulty;
}

export default async function(difficulty: Difficulty) {
    console.log("Selecting game text with difficulty: " + difficulty);
    const allGameTexts = await fetchGameText();
    const allGameTextsForDifficulty = getGameTextsWithDifficulty(allGameTexts.gameTexts, difficulty);

    return getWordsFromText(getRandomGameText(allGameTextsForDifficulty));
}

const fetchGameText = async () => {
    return fetch('src/data.json').then(response => {
        if(!response.ok) throw new Error('Could not fetch game text.');
        return response.json();
    });
}

const getGameTextsWithDifficulty = (gameTexts: GameText[], difficulty: Difficulty): GameText[] => {
    return gameTexts?.filter((gameText: GameText) => (gameText.difficulty === difficulty));
};

const getRandomGameText = (gameTexts: GameText[]): string => {
    return gameTexts[Math.floor(Math.random() * gameTexts.length)].text;
}

const getWordsFromText = (text: string) => {
    return addSpacesToWordsArray(text.split(' '));
}

const addSpacesToWordsArray = (words: string[]): string[] => {
    return words.flatMap(word => [word, " "]);
}