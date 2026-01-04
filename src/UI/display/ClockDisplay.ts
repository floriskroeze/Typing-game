import Observer from "../../interface/Observer.ts";
import Clock from "../../observer/Clock.ts";

export class ClockDisplay implements Observer<string> {
    private static instance: ClockDisplay | undefined;
    private readonly element: HTMLElement = document.getElementById('clock')!;
    private subject: Clock;

    private constructor() {
        this.subject = Clock.getInstance();
        this.subject.registerObserver(this);
    }

    setInnerHTML(value: string): void {
        this.element.innerHTML = value;
    }

    update(value: string): void {
        this.setInnerHTML(value);
    }

    static getInstance(): ClockDisplay {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}