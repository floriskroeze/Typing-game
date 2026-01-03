

export default interface Observer {
    update<TValue>(value: TValue): void;
}