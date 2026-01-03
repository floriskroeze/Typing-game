import {displayScreen, GameScreen, getScreen, hideScreen} from "../../helpers/screen.ts";
import GameRound from "../../game-round/GameRound.ts";

export enum Difficulty {
    "EASY"= 1,
    "MEDIUM"= 2,
    "HARD" = 3
}

export type KeyOfDifficulty = keyof typeof Difficulty;

export enum GameLength {
    TEN_SECONDS = 10,
    HALF_MINUTE = 30,
    ONE_MINUTE = 60,
    TWO_MINUTES = 120,
}

export type KeyOfGameLength = keyof typeof GameLength;

export type Settings = {
    difficulty: Difficulty,
    gameLength: GameLength
}

export default function () {
    if (!getScreen(GameScreen.START)) throw new Error('Start screen not found.');
    setupStartButton();
    displayScreen(GameScreen.START);
}

const setupStartButton = () => {
    const startForm = getScreen(GameScreen.START)?.querySelector('form');

    if (!startForm) throw new Error('Start form not found.');

    startForm.addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        const formData = getFormDataFromEventCurrentTarget(e.currentTarget);

        const settingsObj: Settings = {
            difficulty: Difficulty[formData.difficulty],
            gameLength: GameLength[formData.gameLength]
        };

        GameRound.init(settingsObj);

        GameRound.getInstance().startRound();

        hideScreen(GameScreen.START);
    });
}
export type startGameFormData = {
    difficulty: KeyOfDifficulty,
    gameLength: KeyOfGameLength
}
const getFormDataFromEventCurrentTarget = (currentTarget: EventTarget|null): startGameFormData => {
    const formData =  new FormData(currentTarget as HTMLFormElement);

    return {
        difficulty: formData.get('difficulty') as KeyOfDifficulty,
        gameLength: formData.get('gameLength') as KeyOfGameLength
    }
}