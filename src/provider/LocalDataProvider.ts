import {Difficulty} from "../constant/settings.ts";
import {GameConfig} from "../config/GameConfig.ts";

export type GameText = {
    difficulty: Difficulty,
    text: string
}

interface IDataProvider {
    getText(config: GameConfig): string;
}

const SAMPLE_TEXTS: GameText[] = [
    { text: "the quick brown fox jumps over the lazy dog", difficulty: 0 },
    { text: "pack my box with five dozen liquor jugs", difficulty: 0 },
    { text: "sphinx of black quartz judge my vow", difficulty: 1 },
    { text: "how vexingly quick daft zebras jump", difficulty: 1 },
    { text: "the five boxing wizards jump quickly", difficulty: 2 },
];

export default class LocalDataProvider implements IDataProvider {
    getText(config: GameConfig): string {
        const candidates = SAMPLE_TEXTS.filter(t => t.difficulty === config.difficulty);
        if (candidates.length === 0) return "No texts with difficulty found";
        const idx = Math.floor(Math.random() * candidates.length);
        return candidates[idx].text;
    }
}