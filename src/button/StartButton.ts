import {Button} from "./button/Button.ts";

export class StartButton {
    public startButtonElement?: HTMLButtonElement;

    public static create(startHandler: (e: Event) => void): StartButton {
        const startButton = new this;
        startButton.startButtonElement = startButton.createStartButton(startHandler);
        return startButton;
    }

    private createStartButton(startHandler: (e: Event) => void): HTMLButtonElement {
        const startButton = Button.createButtonElement('Start!', 'start-button');
        startButton.addEventListener('click', startHandler);

        return startButton;
    }

    private destroyStartButton(): void {
        this.startButtonElement?.remove();
    }
}