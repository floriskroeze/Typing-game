import TimerDisplay from "../observer/TimerDisplay.ts";

export default class GameScreen {
    private readonly textContainer: HTMLElement;

    timerDisplay: TimerDisplay;

    constructor() {
        this.textContainer = document.getElementById('text-container')!;
        this.timerDisplay = new TimerDisplay();

        if (!this.textContainer || !this.timerDisplay) {
            throw new Error('GameScreen: Required DOM elements not found');
        }
    }

    renderText(text: string) {
        [...text].forEach((letter, index) => this.textContainer.innerHTML += `<span id="letter-${index}">${letter}</span>`);
    }

    updateCurrentLetter(index: number) {
        this.textContainer.querySelector(`#letter-${index}`)?.classList?.add( 'border-b-2', 'border-blue-500', 'whitespace-pre');
    }

    markLetter(index: number, isCorrect: boolean) {


        if (isCorrect) {
            this.markLetterCorrect(index)
        } else {
            this.markLetterIncorrect(index);
        }

        this.updateCurrentLetter(index += 1);
    }

    reset() {
        this.textContainer.innerHTML = '';
        this.timerDisplay.reset();
    }

    private markLetterCorrect(index: number) {
        this.textContainer.querySelector(`#letter-${index}`)?.classList.remove('border-b-2');
        this.textContainer.querySelector(`#letter-${index}`)?.classList.add(
            'text-green-500',
        )
    }

    private markLetterIncorrect(index: number) {
        this.textContainer.querySelector(`#letter-${index}`)?.classList.remove('border-b-2');
        this.textContainer.querySelector(`#letter-${index}`)?.classList.add(
            'text-red-500',
        )
    }
}