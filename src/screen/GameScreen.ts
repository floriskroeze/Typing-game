export default class GameScreen {
    private timerElement: HTMLElement;
    private textContainer: HTMLElement;

    constructor() {
        this.timerElement = document.getElementById('timer')!;
        this.textContainer = document.getElementById('text-container')!;
    }

    renderText(text: string) {
        [...text].forEach((letter, index) => this.textContainer.innerHTML += `<span id="letter-${index}">${letter}</span>`);
    }

    updateCurrentLetter(index: number) {
        this.textContainer.querySelector(`#letter-${index}`)?.classList?.add('text-blue-500', 'border-b-2');
    }

    markLetter(index: number, isCorrect: boolean) {
        isCorrect ? this.markLetterCorrect(index) : this.markLetterIncorrect(index);

        this.updateCurrentLetter(index += 1);
    }

    reset() {
        this.textContainer.innerHTML = '';
        this.timerElement.innerHTML = '00:00';
    }

    private markLetterCorrect(index: number) {
        this.textContainer.querySelector(`#letter-${index}`)?.classList.remove('border-b-2');
        this.textContainer.querySelector(`#letter-${index}`)?.classList.add(
            'text-green-500',
            'animate-[bounce_0.3s_ease-in-out_1]',
        )
    }

    private markLetterIncorrect(index: number) {
        this.textContainer.querySelector(`#letter-${index}`)?.classList.remove('border-b-2');
        this.textContainer.querySelector(`#letter-${index}`)?.classList.add(
            'text-red-500',
            'animate-[bounce_0.3s_ease-in-out_1]',
        )
    }
}