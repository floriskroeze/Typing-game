import Observer from "./Observer.ts";

export default interface Subject<TData> {
    registerObserver(o: Observer<TData>): void;
    unregisterObserver(o: Observer<TData>): void;
    notifyObservers(): void;
}