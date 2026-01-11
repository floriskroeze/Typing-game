export const Difficulty = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
} as const;

export const GameLength = {
    TEN_SECONDS: 10,
    HALF_MINUTE: 30,
    ONE_MINUTE: 60,
    TWO_MINUTES: 120
} as const;

export type KeyOfDifficulty = keyof typeof Difficulty;
export type KeyOfGameLength = keyof typeof GameLength;

export type ValueOfDifficulty = typeof Difficulty[keyof typeof Difficulty];
export type ValueOfGameLength = typeof GameLength[keyof typeof GameLength];

export type Config = {
    difficulty: ValueOfDifficulty,
    gameLength: ValueOfGameLength
};