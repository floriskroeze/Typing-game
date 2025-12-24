interface IClock {
    time: number;
    start(endGameCallbackFunction: () => void): void;
    stop(intervalID: number): void;
    updateTimeLeft(time: number): void;
    decrementTime(): void;
}

export class Clock implements IClock{
    constructor(private _time: number = 20) {}

    get time(): number {
        return this._time;
    }

    set time(value: number) {
        this._time = value;
    }

    public start(endGameCallbackFunction: () => void): void {
        let interval = setInterval(() => {
            if (this.time === 0) {
                endGameCallbackFunction();
                return this.stop(interval);
            }

            this.decrementTime();
            return this.updateTimeLeft(this.time);
        }, 1000);
    }

    public updateTimeLeft(time: number): void {
        const clockElement = document.querySelector<HTMLElement>('#clock');
        if (clockElement) clockElement.innerHTML = `${time}`;
    }

    public stop(intervalID: number): void {
        clearInterval(intervalID);
    }

    public decrementTime(): void {
        this.time--;
    }
}