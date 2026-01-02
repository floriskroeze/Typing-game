export interface Iterator {
    next(): any;
    hasNext(): boolean;
    reset(): void;
    current(): any;
    prev(): any;
    hasPrev(): boolean;
}