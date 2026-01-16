import {ScreenID} from "../constant/ScreenID.ts";

export default class EndScreen {
    private container: HTMLElement;

    constructor() {
        this.container = document.getElementById(ScreenID.FINISHED)!;
    }
}