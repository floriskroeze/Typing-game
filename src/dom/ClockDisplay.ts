import Observer from "../observer/Observer.ts";
import Subject from "../observer/Subject.ts";

export class ClockDisplay implements Observer<string> {
    private static readonly ELEMENT_ID = 'clock';
    private subject: Subject<string>;

    constructor(clock: Subject<string>) {
        this.subject = clock;
        clock.registerObserver(this);
    }

    static getClockElement(): HTMLElement|null {
        return document.getElementById(this.ELEMENT_ID);
    }

    setInnerHTML(value: string): void {
        const clockElement = ClockDisplay.getClockElement();

        if (clockElement) {
            clockElement.innerHTML = value;
        }
    }

    update(value: string): void {
        this.setInnerHTML(value);
    }
}