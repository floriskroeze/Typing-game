import {ScoreResult} from "./Score.ts";

export class ScoreBoard {
    public static displayResults(results: ScoreResult): void {
        const wpmElement = document.getElementById('wpm');
        const accuracyElement = document.getElementById('accuracy');
        if (!wpmElement || !accuracyElement) return;
        wpmElement.innerHTML = results.wpm.toString();
        accuracyElement.innerHTML = results.accuracy.toString() + '%';
    }

    public static clearResults(): void {
        const wpmElement = document.getElementById('wpm');
        const accuracyElement = document.getElementById('accuracy');
        if (!wpmElement || !accuracyElement) return;
        wpmElement.innerHTML = '';
        accuracyElement.innerHTML = '';
        this.hideScoreBoard();
    }

    public static showScoreBoard(): void {
        const wpmWrapperElement = document.getElementById('wpm-wrapper');
        const accuracyWrapperElement = document.getElementById('accuracy-wrapper');
        wpmWrapperElement?.classList.remove('hidden');
        accuracyWrapperElement?.classList.remove('hidden');

        wpmWrapperElement?.classList.add('flex');
        accuracyWrapperElement?.classList.add('flex');
    }

    public static hideScoreBoard(): void {
        const wpmWrapperElement = document.getElementById('wpm-wrapper');
        const accuracyWrapperElement = document.getElementById('accuracy-wrapper');
        wpmWrapperElement?.classList.remove('flex');
        accuracyWrapperElement?.classList.remove('flex');
        wpmWrapperElement?.classList.add('hidden');
        accuracyWrapperElement?.classList.add('hidden');


    }
}