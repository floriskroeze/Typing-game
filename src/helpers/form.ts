export const getFormDataFromEventCurrentTarget = (currentTarget: EventTarget|null): FormData => {
    const formData: FormData =  new FormData(currentTarget as HTMLFormElement);

    return formData;
}