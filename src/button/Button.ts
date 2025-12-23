export class Button {
    public static createButtonElement(buttonText: string, id?: string): HTMLButtonElement {
        const buttonElement = document.createElement('button');
        buttonElement.classList ="group inline-block rounded-full bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:text-white";
        if (id) buttonElement.setAttribute('id', id);
        buttonElement.appendChild(Button.createInnerSpanElement(buttonText));

        return buttonElement;
    }

    private static createInnerSpanElement(buttonText: string): HTMLSpanElement {
        const spanElement = document.createElement('span');
        spanElement.innerText = buttonText;
        spanElement.classList = "block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent";

        return spanElement;
    }
}