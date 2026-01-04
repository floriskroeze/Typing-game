import Subject from "../interface/Subject.ts";
import Observer from "../interface/Observer.ts";
import Clock from "./Clock.ts";

export default class Input implements Subject<string> {
    private static instance: Input | undefined;
    private pressedKey: string = '';
    private observers: Observer<string>[] = [];
    private keyDownHandler: (e: KeyboardEvent) => void;

    private constructor() {
        this.keyDownHandler = this.handleKeydown.bind(this);
    }

    private setPressedKey(key: string) {
        this.pressedKey = key;
        this.notifyObservers();
    }

    getPressedKey(): string {
        return this.pressedKey;
    }

    registerObserver(o: Observer<string>) {
        this.observers.push(o);
    }

    unregisterObserver(o: Observer<string>) {
        this.observers = this.observers.filter(observer => observer !== o);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.pressedKey));
    }

    registerToDocument() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
    }

    unregisterFromDocument() {
        document.removeEventListener('keydown', this.keyDownHandler.bind(this));
    }

    static getInstance(): Input {
        if (!Input.instance) {
            Input.instance = new Input();
        }
        return Input.instance;
    }

    private handleKeydown(e: KeyboardEvent): void {
        const key = e.key;

        if (['Shift', 'Control', 'Alt', 'Meta'].includes(key)) return;
        if (!Clock.getInstance().isRunning()) Clock.getInstance().start();

        this.setPressedKey(e.key);
    }
}