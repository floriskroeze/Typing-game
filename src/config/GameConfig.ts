import {Config, ValueOfDifficulty, ValueOfGameLength} from "../constant/settings.ts";

export default class GameConfig {
    private readonly difficulty: ValueOfDifficulty;
    private readonly gameLength: ValueOfGameLength;

    constructor(config: Config) {
        this.difficulty = config.difficulty;
        this.gameLength = config.gameLength;
    }

    getDifficulty(): ValueOfDifficulty {
        return this.difficulty;
    }

    getGameLength(): ValueOfGameLength {
        return this.gameLength;
    }
}