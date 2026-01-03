export default interface Observer<TData> {
    update(value: TData): void;
}