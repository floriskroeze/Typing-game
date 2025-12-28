interface IState {
    currentWordIndex: number,
    currentLetterIndex: number,
    mistakeCount: number,
    totalCharactersTyped: number
}

export class GameState implements IState {
    public constructor(private _currentWordIndex: number = 0, private _currentLetterIndex: number = 0, private _mistakeCount: number = 0, private _totalCharactersTyped: number = 0) {}

    get currentWordIndex(): number {
        return this._currentWordIndex;
    }

    set currentWordIndex(value: number) {
        this._currentWordIndex = value;
    }

    get currentLetterIndex(): number {
        return this._currentLetterIndex;
    }

    set currentLetterIndex(value: number) {
        this._currentLetterIndex = value;
    }

    get mistakeCount(): number {
        return this._mistakeCount;
    }

    set mistakeCount(value: number) {
        this._mistakeCount = value;
    }

    get totalCharactersTyped(): number {
        return this._totalCharactersTyped;
    }

    set totalCharactersTyped(value: number) {
        this._totalCharactersTyped = value;
    }

    public incrementTotalCharactersTyped(): void {
        this._totalCharactersTyped++;
    }

    public incrementMistakeCount(): void {
        this._mistakeCount++;
    }

    public incrementCurrentWordIndex(): void {
        this._currentWordIndex++;
    }

    public incrementCurrentLetterIndex(): void {
        this._currentLetterIndex++;
    }
}