export const Difficulty = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
} as const;
export const GameLength = {
    TEN_SECONDS: 10,
    HALF_MINUTE: 30,
    ONE_MINUTE: 60,
    TWO_MINUTES: 120
} as const;

export type KeyOfDifficulty = keyof typeof Difficulty;
export type KeyOfGameLength = keyof typeof GameLength;

export interface Settings {
    difficulty: KeyOfDifficulty,
    gameLength: KeyOfGameLength
}