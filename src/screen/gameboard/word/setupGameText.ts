import GameTextIterator from "../../../iterator/GameTextIterator.ts";

import {Difficulty, KeyOfDifficulty} from "../../../constant/settings.ts";

type GameTexts = {
    gameTexts: GameText[]
}

export type GameText = {
    text: string,
    difficulty: number;
}

export default async function(difficulty: KeyOfDifficulty) {
    console.log("Selecting game text with difficulty: " + difficulty);
    const allGameTexts: GameTexts = await fetchGameText();
    const allGameTextsForDifficulty = getGameTextsWithDifficulty(allGameTexts.gameTexts, Difficulty[difficulty]);
    const gameText = getRandomGameText(allGameTextsForDifficulty);

    return { words: getWordsFromText(gameText.text), gameText: gameText};
}

const fetchGameText = async () => {
    return await fetch('src/data.json').then(response => {
        if(!response.ok) throw new Error('Could not fetch game text.');
        return response.json();
    });
}

const getGameTextsWithDifficulty = (gameTexts: GameText[], difficulty: number): GameText[] => {
    return gameTexts?.filter((gameText: GameText) => (gameText.difficulty === difficulty));
};

const getRandomGameText = (gameTexts: GameText[]): GameText => {
    return gameTexts[Math.floor(Math.random() * gameTexts.length)];
}

const getWordsFromText = (text: string) => {
    return addSpacesToWordsArray(text.split(' '));
}

const addSpacesToWordsArray = (words: string[]): string[] => {
    return words.flatMap(word => [word, " "]);
}

export const createGameTextIterator = (gameText: GameText) => new GameTextIterator(gameText.text.split(''));