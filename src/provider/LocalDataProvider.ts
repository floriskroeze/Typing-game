import {Difficulty, GameConfig, KeyOfDifficulty} from "../config/GameConfig.ts";
import SAMPLE_TEXTS from '../data.json';

export type GameText = {
    difficulty: string,
    duration: number,
    text: string
}

interface IDataProvider {
    getText(config: GameConfig): string;
}


export default class LocalDataProvider implements IDataProvider {
    getText(config: GameConfig): string {
        const candidates = SAMPLE_TEXTS.filter(t => (Difficulty[t.difficulty.toUpperCase() as KeyOfDifficulty] === config.difficulty && parseInt(t.duration) === config.gameLength));
        if (candidates.length === 0) return "No texts with difficulty found";
        const idx = Math.floor(Math.random() * candidates.length);
        return candidates[idx].text;
    }
}