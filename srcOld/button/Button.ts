export class Button {
    readonly buttonElement: HTMLButtonElement;

    constructor(private readonly _id: string, buttonElement: HTMLButtonElement) {
        this.buttonElement = buttonElement;
    }

    get id(): string {
        return this._id;
    }
}