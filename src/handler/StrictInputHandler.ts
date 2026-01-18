export default class StrictInputHandler {
    private readonly FOCUS_POLL_INTERVAL = 1000;
    private readonly inputElement: HTMLInputElement;
    private chars: string[] = [];
    private currentIndex: number = 0;
    private isSessionActive: boolean = false;
    private isStarted: boolean = false;
    private mistakeCount: number = 0;
    private lostFocusTimeout?: number | null = null;

    public onStart: () => void;
    public onProgress: (index: number, isCorrect: boolean) => void;


    constructor(onStart: () => void, onProgress: (index: number, isCorrect: boolean) => void) {
        this.inputElement = document.getElementById('input')! as HTMLInputElement;

        this.onStart = onStart;
        this.onProgress = onProgress;

        this.inputElement.addEventListener('input', this.handleInput.bind(this));
        this.inputElement.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    destroy(): void {
        this.inputElement.removeEventListener('input', this.handleInput);
        this.inputElement.removeEventListener('keydown', this.handleKeyDown);
    }

    setText(text: string): void {
        this.reset();

        this.chars = [...text];
    }

    setOnStart(onStart: () => void): void {
        this.onStart = onStart;
    }

    reset(): void {
        this.mistakeCount = 0;
        this.currentIndex = 0;
        this.isSessionActive = false;

        this.chars = [];
    }

    getCurrentPosition(): number {
        return this.currentIndex;
    }

    getMistakes(): number {
        return this.mistakeCount;
    }

    focusInput(): void {
        this.isSessionActive = true;
        this.inputElement.focus();

        setTimeout(() => this.inputElement.focus(), 50);
        setTimeout(() => this.inputElement.focus(), 150);
    }


    activeFocusManagement(): void {
        this.isSessionActive = true;
        this.focusInput();

        this.startPollingFocus();

        window.addEventListener('focus', this.handleWindowFocus);
        window.addEventListener('blur', this.handleWindowBlur);
    }

    private handleInput(e: Event): void {
        if (!this.isStarted) {
            this.isStarted = true;
            this.onStart && this.onStart();
        }

        const charTyped = this.inputElement.value;
        const expected = this.chars[this.currentIndex];
        const isCorrect = charTyped === expected;

        if (!isCorrect) {
            this.mistakeCount++;
        }

        this.onProgress(this.currentIndex, isCorrect);

        this.inputElement.value = '';
        this.currentIndex++;
    }
    private handleKeyDown(e: KeyboardEvent): void {
        this.preventDefaultBehaviors(e);
    }

    private startPollingFocus(): void {
        const checkFocus = () => {
            if (!this.isSessionActive) return;

            if (document.activeElement !== this.inputElement) {
                this.focusInput();
            }

            this.lostFocusTimeout = setTimeout(checkFocus, this.FOCUS_POLL_INTERVAL);
        }

        checkFocus();
    }

    private handleWindowFocus = (e: FocusEvent) => {
        if (!this.isSessionActive) return;
        this.startPollingFocus();
    };

    private handleWindowBlur = (e: FocusEvent) => {
        this.lostFocusTimeout && clearTimeout(this.lostFocusTimeout);
    };

    private preventDefaultBehaviors(e: KeyboardEvent): void {
        if (e.key === 'Backspace') e.preventDefault();
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') e.preventDefault();
        if (e.key === 'Home' || e.key === 'End') e.preventDefault();
        if (e.key === 'Delete') e.preventDefault();
        if (e.key === 'Shift') e.preventDefault();
    }
}