import {Screen} from "./Screen.ts";

export default class StartScreen implements Screen{
    readonly ELEMENT_ID = 'start-screen';
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById(this.ELEMENT_ID)!;
    }

    show(): void {
        this.element.classList.remove('hidden');
    }

    hide(): void {
        this.element.classList.add('hidden');
    }
}