import Observer from "./Observer.ts";
import Subject from "./Subject.ts";

export default class Timer implements Subject<string>{
    private time: number = 0;
    private observers: Observer<string>[] = [];
    private intervalId: number | null = null

    private onTimerEnd?: () => void;

    constructor() {}

    setTime(time: number) {
        this.time = time;
        this.notifyObservers(this.getTimeString());
    }

    start() {
        if (this.intervalId !== null) return;

        this.intervalId = window.setInterval(() => {
            if (this.time > 0) {
                this.time--;
                this.notifyObservers(this.getTimeString());
            } else {
                this.stop();
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    getTimeString(): string {
        return this.time.toString();
    }

    isRunning(): boolean {
        return this.intervalId !== null;
    }

    registerObserver(o: Observer<string>) {
        this.observers.push(o);
    }
    unregisterObserver(o: Observer<string>) {
        this.observers = this.observers.filter(observer => observer !== o);
    }
    notifyObservers(value: string) {
        this.observers.forEach(observer => observer.update(this.time.toString()));
    }
}