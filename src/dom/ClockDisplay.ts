import Observer from "../observer/Observer.ts";
import Subject from "../observer/Subject.ts";
import Clock from "../observer/Clock.ts";

export class ClockDisplay implements Observer {
    private static readonly ELEMENT_ID = 'clock';
    private subject: Subject;

    constructor(clock: Clock) {
        this.subject = clock;
        ClockDisplay.setInnerHTML(clock.getTimeString());
        clock.registerObserver(this);
    }

    static getClockElement(): HTMLElement|null {
        return document.getElementById(this.ELEMENT_ID);
    }

    static setInnerHTML(value: string): void {
        const clockElement = ClockDisplay.getClockElement();

        if (clockElement) {
            clockElement.innerHTML = value;
        }
    }

    update<TValue>(value: TValue): void {
        console.log('ClockDisplay: update');
        ClockDisplay.setInnerHTML(value as string);
    }
}