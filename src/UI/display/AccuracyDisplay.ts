export class AccuracyDisplay {
    private static instance: AccuracyDisplay | undefined;
    private readonly element: HTMLElement = document.getElementById('accuracy')!;

    private constructor() {}

    setInnerHTML(value: string): void {
        this.element.innerHTML = value;
    }

    static getInstance(): AccuracyDisplay {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}