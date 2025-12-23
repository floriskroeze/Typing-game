export class Clock {
    private readonly clockElement: Element|null;
    private time = 20;
    private intervalID: number|undefined;

    constructor(time: number) {
        this.clockElement = document.getElementById('clock');
        this.time = time;
    }

    public start(): void {
        this.setTimeLeft(20);
        this.intervalID = setInterval(() => {
            if(!this.clockElement) return;

            if (this.time === 0) {
                return this.stop();
            }

            this.decrementTime();
            return this.setClockElementTime(this.time);
        }, 1000);
    }

    public setClockElementTime(time: number): void {
        if(!this.clockElement) return;

        this.clockElement.innerHTML = `${time}`
    }

    public static showClock(): void {
        const clockElement = document.getElementById('clock-wrapper');
        clockElement?.classList.remove('hidden');
        clockElement?.classList.add('flex');
    }

    public static hideClock(): void {
        const clockElement = document.getElementById('clock-wrapper');
        clockElement?.classList.add('hidden');
        clockElement?.classList.remove('flex');
    }

    private stop(): void {
        clearInterval(this.intervalID);
    }

    public getTimeLeft(): number {
        return this.time;
    }

    public setTimeLeft(time: number): void {
        this.time = time;
    }

    private decrementTime(): void {
        this.time--;
    }
}