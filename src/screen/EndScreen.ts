import {ScreenID} from "../constant/screens.ts";

export default class EndScreen {
    private container: HTMLElement;

    constructor() {
        this.container = document.getElementById(ScreenID.FINISHED)!;
    }

    init(): void {
        throw new Error("Method not implemented.");
    }
}