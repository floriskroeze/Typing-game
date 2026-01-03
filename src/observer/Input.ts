import Subject from "./Subject.ts";
import Observer from "./Observer.ts";

export default class Input implements Subject {
    static singleton: Input = new Input();

    private pressedKey: string = '';
    private observers: Observer[] = [];

    setPressedKey(e: KeyboardEvent, key: string) {
        if (key === 'Shift' || key === 'Ctrl') return;



        this.pressedKey = key;
        console.log('Input: set pressed key to ' + key);
        this.notifyObservers();
    }

    getPressedKey(): string {
        return this.pressedKey;
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    unregisterObserver(o: Observer) {
        this.observers = this.observers.filter(observer => observer !== o);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update<string>(this.pressedKey));
    }

    registerToDocument() {
        document.addEventListener('keydown', (e: KeyboardEvent) => this.setPressedKey(e, e.key));
    }

    unregisterFromDocument() {
        document.removeEventListener('keydown', (e: KeyboardEvent) => this.setPressedKey(e, e.key));
    }

    static getSingleton(): Input {
        return Input.singleton;
    }
}