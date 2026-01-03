import {Iterator} from "./Iterator.ts";

export default class GameTextIterator implements Iterator {
    private currentIndex: number = -1
    private readonly gameText: string[] = [];

    constructor(gameText: string[]) {
        this.gameText = gameText;
    }

    getCurrentIndex(): number {
        return this.currentIndex;
    }

    current(): string {
        return this.gameText[this.currentIndex];
    }

    hasNext(): boolean {
        return this.currentIndex < this.gameText.length;
    }

    hasPrev(): boolean {
        return this.currentIndex !== 0;
    }

    next(): string|null {
        if (!this.hasNext()) return null;

        this.currentIndex++;
        return this.gameText[this.currentIndex];
    }

    prev(): string|null {
        if (!this.hasPrev()) return null;
        this.currentIndex--;
        return this.gameText[this.currentIndex];
    }

    reset(): void {
    }

}