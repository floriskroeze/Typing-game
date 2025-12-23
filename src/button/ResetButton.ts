import {Button} from "./Button.ts";

export class ResetButton {
    public resetButtonElement?: HTMLButtonElement;

    public static create(resetHandler: (e: Event) => void): ResetButton {
        const resetButton = new this;
        resetButton.resetButtonElement = resetButton.createResetButton(resetHandler);
        return resetButton;
    }

    private createResetButton(resetHandler: (e: Event) => void): HTMLButtonElement {
        const resetButton = Button.createButtonElement('Go again!', 'reset-button');
        resetButton.addEventListener('click', resetHandler);

        return resetButton;
    }

    public static destroyResetButton(): void {
        const resetButton = document.getElementById('reset-button');
        resetButton?.remove();
    }
}