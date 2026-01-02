import {Iterator} from "./Iterator.ts";

export default class WordIterator implements Iterator {
    constructor(private _word: string[], private _currentPosition: number = 0) {
    }


    get word(): string[] {
        return this._word;
    }

    set word(value: string) {
        this._word = value.split('');
    }

    get currentPosition(): number {
        return this._currentPosition;
    }

    set currentPosition(value: number) {
        this._currentPosition = value;
    }

    current(): any {
        return this.word[this.currentPosition];
    }

    hasNext(): boolean {
        return this.currentPosition < this.word.length;
    }

    hasPrev(): boolean {
        return this.currentPosition > 0;
    }

    next(): any {
        return this.word[++this.currentPosition];
    }

    prev(): any {
        return this.word[--this.currentPosition];
    }

    reset(): void {
        this.currentPosition = 0;
    }
}