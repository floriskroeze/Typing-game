import Observer from "./Observer.ts";

export default interface Subject {
    registerObserver(o: Observer): void;
    unregisterObserver(o: Observer): void;
    notifyObservers(): void;
}