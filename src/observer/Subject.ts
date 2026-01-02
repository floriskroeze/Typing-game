export default interface Subject {
    register(): void;
    unregister(): void;
    notifyObservers(): void;
}