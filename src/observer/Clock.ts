import Observer from "./Observer.ts";
import Subject from "./Subject.ts";

export default class Clock  implements Subject{
    private time: number = 0;
    private observers: Observer[] = [];

    constructor(time: number) {
        this.time = time;
        this.notifyObservers();
    }

    start() {
        const interval = setInterval(() => {
            this.time--;
            this.notifyObservers();

            if (this.time === 0) clearInterval(interval);
        }, 1000);
    }

    stop() {
        this.time = 0;
    }

    getTimeString(): string {
        return this.time.toString();
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }
    unregisterObserver(o: Observer) {
        this.observers = this.observers.filter(observer => observer !== o);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update<string>(this.time.toString()));
    }
}