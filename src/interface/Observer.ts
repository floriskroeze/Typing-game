export default interface Observer<T = void> {
    update(value: T): void;
}