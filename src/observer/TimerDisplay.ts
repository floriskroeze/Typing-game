import Timer from "./Timer.ts";
import Observer from "./Observer.ts";
import {calculateMinutes, calculateSeconds, formatTime} from "../helpers/timer.ts";

export default class TimerDisplay implements Observer<number>{
    private timer: Timer | null = null;
    private element: HTMLElement;

    constructor() {
        this.element = document.getElementById('timer')!;
        this.reset();
    }

    setTimer(timer: Timer) {
        this.timer = timer;
        this.timer.registerObserver(this);
    }

    reset() {
        this.element.innerHTML = '00:00';
    }

    update(value: number) {
        this.setTimeInDisplay(value);
    }

    private setTimeInDisplay(time: number) {
        this.element.innerHTML = formatTime(calculateMinutes(time), calculateSeconds(time));
    }

}