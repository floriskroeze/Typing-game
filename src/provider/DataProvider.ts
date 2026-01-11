export default interface DataProvider<T> {
    get(): T
}