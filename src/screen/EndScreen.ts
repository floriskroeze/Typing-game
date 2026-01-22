import {ScreenID} from "../constant/ScreenID.ts";
import {GameScore} from "../helpers/score.ts";

export default class EndScreen {
    private readonly container: HTMLElement;
    private readonly grossWPMElement: HTMLElement;
    private readonly netWPMElement: HTMLElement ;
    private readonly accuracyElement: HTMLElement;
    private readonly resetButton: HTMLButtonElement;

    onPlayAgain: () => void = () => {};

    constructor() {
        this.container = document.getElementById(ScreenID.FINISHED)!;
        this.grossWPMElement = this.container.querySelector('#gross-wpm')!
        this.netWPMElement = this.container.querySelector('#net-wpm')!
        this.accuracyElement = this.container.querySelector('#accuracy')!
        this.resetButton = this.container.querySelector('#play-again')!;

        if (!this.container || !this.resetButton || !this.grossWPMElement || !this.netWPMElement || !this.accuracyElement) {
            throw new Error('EndScreen: Required DOM elements not found');
        }

        this.resetButton.addEventListener('click', this.handleResetClick.bind(this));

        this.reset();
    }

    reset(): void {
        this.setGrossWPMElementInnerHTML("0");
        this.setNetWPMElementInnerHTML("0");
        this.setAccuracyElementInnerHTML("0");
    }

    setOnPlayAgain(onPlayAgain: () => void) {
        this.onPlayAgain = onPlayAgain;
    }

    displayScores(score: GameScore): void {
        this.setGrossWPMElementInnerHTML(score.wpm.grossWPM.toString());
        this.setNetWPMElementInnerHTML(score.wpm.netWPM.toString());
        this.setAccuracyElementInnerHTML(score.accuracy.toString());
    }

    handleResetClick(event: Event) {
        event.preventDefault();
        this.reset();
        this.onPlayAgain();
    }

    private setGrossWPMElementInnerHTML(value: string) {
        this.grossWPMElement.innerHTML = value;
    }

    private setNetWPMElementInnerHTML(value: string) {
        this.netWPMElement.innerHTML = value;
    }

    private setAccuracyElementInnerHTML(value: string) {
        this.accuracyElement.innerHTML = value + "%";
    }
}