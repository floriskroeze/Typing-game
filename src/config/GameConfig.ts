export interface GameConfig {
    difficulty: number;
    gameLength: number;
}

export enum Difficulty {
    EASY,
    MEDIUM,
    HARD,
    ELITE
}

export const GameLength = {
    FIFTEEN_SECONDS: 15,
    HALF_MINUTE: 30,
    ONE_MINUTE: 60,
    TWO_MINUTES: 120
} as const;

export type KeyOfDifficulty = keyof typeof Difficulty;
export type KeyOfGameLength = keyof typeof GameLength;
export type ValueOfGameLength = typeof GameLength[keyof typeof GameLength];