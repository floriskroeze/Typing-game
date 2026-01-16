import Observer from "./Observer.ts";

export default interface Subject <T = void>{
    registerObserver(o: Observer<T>): void;
    unregisterObserver(o: Observer<T>): void;
    notifyObservers(value: T): void;
}