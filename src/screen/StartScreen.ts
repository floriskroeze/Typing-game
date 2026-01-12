import {getScreenElement} from "../helpers/screen.ts";
import {ScreenID} from "../constant/screens.ts";
import {
    Config,
    Difficulty,
    GameLength,
    KeyOfDifficulty, KeyOfGameLength, ValueOfGameLength,
} from "../constant/settings.ts";

import {GameConfig} from "../config/GameConfig.ts";

export default class StartScreen {
    private readonly DIFFICULTY_DEFAULT: KeyOfDifficulty = "EASY";
    private readonly GAME_LENGTH_DEFAULT: ValueOfGameLength = GameLength["TEN_SECONDS"];

    private readonly container: HTMLElement;
    private readonly difficultyInputs: NodeListOf<HTMLInputElement>;
    private readonly gameLengthInputs: NodeListOf<HTMLInputElement>;
    private readonly startButton: HTMLButtonElement;

    private readonly onStartRequested: (config: GameConfig) => void;

    constructor(onStartRequested: (config: GameConfig) => void) {
        this.onStartRequested = onStartRequested;

        this.container = getScreenElement(ScreenID.START);
        this.difficultyInputs = document.querySelectorAll('input[name=difficulty-select]') as NodeListOf<HTMLInputElement>;
        this.gameLengthInputs = document.querySelectorAll('input[name=gameLength-select]') as NodeListOf<HTMLInputElement>;
        this.startButton = document.getElementById('start-button') as HTMLButtonElement;

        if (!this.container || !this.startButton) {
            throw new Error('StartScreen: Required DOM elements not found');
        }

        this.startButton.addEventListener('click', this.handleStartClick.bind(this));
    }

    reset(): void {
        Array.from(this.difficultyInputs).forEach((element) => element.checked = element.value === this.DIFFICULTY_DEFAULT );
        Array.from(this.gameLengthInputs).forEach((element) => element.checked = parseInt(element.value) === this.GAME_LENGTH_DEFAULT);
    }

    private handleStartClick(event: Event) {
        event.preventDefault();

        const config: GameConfig = {
            difficulty: Difficulty[this.getSelectedDifficulty()],
            gameLength: GameLength[this.getSelectedGameLength()]
        }

        this.onStartRequested(config);
    }

    private getSelectedDifficulty(): KeyOfDifficulty {
        return Array.from(this.difficultyInputs).find(el => el.checked)?.value as KeyOfDifficulty;
    }

    private getSelectedGameLength(): KeyOfGameLength {
        return Array.from(this.gameLengthInputs).find(el => el.checked)?.value as KeyOfGameLength;
    }
}