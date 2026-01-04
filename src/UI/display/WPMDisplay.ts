export class WPMDisplay {
    private static instance: WPMDisplay | undefined;
    private readonly element: HTMLElement = document.getElementById('wpm')!;

    private constructor() {}

    setInnerHTML(value: string): void {
        this.element.innerHTML = value;
    }

    static getInstance(): WPMDisplay {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}