
export default class GameState {
    static instance: GameState;

    constructor(private _currentLetter: string, private _mistakeCount: number, private _gameTime: number, private _totalCharactersTyped: number) {
    }

    get currentLetter(): string {
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
            return new this('', 0, 0, 0);
        }
        return this.instance;
    }
}