import {GameScore} from "./types/gamescore.ts";

export function calculate(mistakeCount: number = 0, totalCharactersTyped: number = 0, gameTime: number = 0): GameScore {
    const accuracy = calculateAccuracy(mistakeCount, totalCharactersTyped).toFixed(2);
    const wpm = calculateWordsPerMinute(totalCharactersTyped, (gameTime / 60)).toFixed(2);
    return {
        wpm,
        accuracy
    }
}

function calculateAccuracy(mistakeCount: number, totalCharactersTyped: number): number {
    return 100 - ((mistakeCount / totalCharactersTyped) * 100);
}

function calculateWordsPerMinute(totalCharactersTyped: number, gameTime: number): number {
    return (totalCharactersTyped / 5) / (gameTime);
}
