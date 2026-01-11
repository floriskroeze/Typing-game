export interface Screen {
    ELEMENT_ID: string;
    element: HTMLElement;
    show(): void;
    hide(): void;
}