import {Button} from "../Button.ts";

export function createButtonElement(buttonText: string, id?: string): HTMLButtonElement {
    const buttonElement = document.createElement('button');
    buttonElement.classList ="group inline-block rounded-full bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:text-white";
    if (id) buttonElement.setAttribute('id', id);
    buttonElement.appendChild(createInnerSpanElement(buttonText));

    return buttonElement;
}

function createInnerSpanElement(buttonText: string): HTMLSpanElement {
    const spanElement = document.createElement('span');
    spanElement.innerText = buttonText;
    spanElement.classList = "block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent";

    return spanElement;
}

export function destroyButton(id: string): void {
    const button = document.getElementById(id);
    button?.remove();
}

export function create(id: string, text: string, eventHandler?: (e: Event) => void): Button {
    const button = new Button(id, createButtonElement(text, id));
    eventHandler && button.buttonElement.addEventListener('click', eventHandler);

    return button;
}