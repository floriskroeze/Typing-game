import {getScreenElement} from "../helpers/screen.ts";
import {ScreenID} from "../constant/screens.ts";
import {GameText} from "../provider/LocalDataProvider.ts";

export default class GameScreen {
    private container: HTMLElement;
    private timerElement: HTMLElement;
    private textContainer: HTMLElement;

    constructor() {
        this.container = getScreenElement(ScreenID.PLAYING)!;
        this.timerElement = document.getElementById('timer')!;
        this.textContainer = document.getElementById('text-container')!;
    }

    renderText(gameText: GameText) {
        this.textContainer.innerHTML = gameText.text;
    }

    updateCurrentLetter(currentLetter: string) {
        this.textContainer.innerHTML = this.textContainer.innerHTML.replace(currentLetter, `<span>${currentLetter}</span>`);
    }

    markLetterCorrect() {}

    markLetterIncorrect() {}

    reset() {
        this.textContainer.innerHTML = '';
        this.timerElement.innerHTML = '00:00';
    }
}