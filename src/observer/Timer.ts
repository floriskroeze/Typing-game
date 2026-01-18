import Observer from "./Observer.ts";
import Subject from "./Subject.ts";

export default class Timer implements Subject<number>{
    private time: number = 0;
    private observers: Observer<number>[] = [];
    private intervalId: number | null = null

    private readonly onTimerEnd: () => void;

    constructor(onTimerEnd: () => void) {
        this.onTimerEnd = onTimerEnd;
    }

    setTime(time: number) {
        this.time = time;
        this.notifyObservers(this.getTime());
    }

    start() {
        if (this.isRunning()) return;

        this.intervalId = window.setInterval(() => {
            if (this.time > 0) {
                this.time--;
                this.notifyObservers(this.getTime());
            } else {
                this.stop();
            }
        }, 1000);
    }

    stop() {
        if (this.isRunning()) {
            clearInterval(this.intervalId!);
            this.intervalId = null;
        }

        this.onTimerEnd();
    }

    getTime(): number {
        return this.time;
    }

    isRunning(): boolean {
        return this.intervalId !== null;
    }

    registerObserver(o: Observer<number>) {
        this.observers.push(o);
    }

    unregisterObserver(o: Observer<number>) {
        this.observers = this.observers.filter(observer => observer !== o);
    }

    notifyObservers(value: number) {
        this.observers.forEach(observer => observer.update(value));
    }
}