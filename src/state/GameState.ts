
export default class GameState {
    static instance: GameState;

    constructor(private _currentLetter: string|null = null, private _mistakeCount: number = 0, private _gameTime: number = 0, private _totalCharactersTyped: number = 0) {
    }

    get currentLetter(): string|null {
        return this._currentLetter;
    }

    set currentLetter(value: string) {
        this._currentLetter = value;
    }

    get mistakeCount(): number {
        return this._mistakeCount;
    }

    set mistakeCount(value: number) {
        this._mistakeCount = value;
    }

    get gameTime(): number {
        return this._gameTime;
    }

    set gameTime(value: number) {
        this._gameTime = value;
    }

    get totalCharactersTyped(): number {
        return this._totalCharactersTyped;
    }

    set totalCharactersTyped(value: number) {
        this._totalCharactersTyped = value;
    }

    static getInstance(): GameState {
        if (!this.instance) {
            this.instance = new this('', 0, 0, 0);
        }
        return this.instance;
    }
}