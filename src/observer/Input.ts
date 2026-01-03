import Subject from "./Subject.ts";
import Observer from "./Observer.ts";

export default class Input implements Subject {
    private pressedKey: string = '';
    private observers: Observer[] = [];

    setPressedKey(key: string) {
        this.pressedKey = key;
        this.notifyObservers();
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
}