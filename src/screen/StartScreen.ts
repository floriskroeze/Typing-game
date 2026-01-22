import {getScreenElement} from "../helpers/screen.ts";
import {ScreenID} from "../constant/ScreenID.ts";
import {
    Difficulty,
    GameConfig,
    GameLength,
    KeyOfDifficulty,
    KeyOfGameLength,
} from "../config/GameConfig.ts";

export default class StartScreen {
    private readonly DIFFICULTY_DEFAULT: KeyOfDifficulty = "EASY";
    private readonly GAME_LENGTH_DEFAULT: KeyOfGameLength = "FIFTEEN_SECONDS";

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

        if (!this.container || !this.startButton || !this.difficultyInputs || !this.gameLengthInputs) {
            throw new Error('StartScreen: Required DOM elements not found');
        }

        this.startButton.addEventListener('click', this.handleStartClick.bind(this));
    }

    reset(): void {
        Array.from(this.difficultyInputs).forEach((element) => element.checked = element.value === this.DIFFICULTY_DEFAULT );
        Array.from(this.gameLengthInputs).forEach((element) => element.checked = element.value === this.GAME_LENGTH_DEFAULT);
    }

    private handleStartClick(event: Event) {
        event.preventDefault();
        const config: GameConfig = {
            difficulty: Difficulty[this.getSelectedDifficulty() as KeyOfDifficulty],
            gameLength: GameLength[this.getSelectedGameLength() as KeyOfGameLength]
        }

        this.onStartRequested(config);
    }

    private getSelectedDifficulty(): string {
        return Array.from(this.difficultyInputs).find(el => el.checked)?.value || this.DIFFICULTY_DEFAULT;
    }

    private getSelectedGameLength(): string {
        return Array.from(this.gameLengthInputs).find(el => el.checked)?.value || this.GAME_LENGTH_DEFAULT;
    }
}