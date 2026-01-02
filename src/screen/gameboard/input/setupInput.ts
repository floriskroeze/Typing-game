export default function() {
    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.focus();
    });

    document?.body.addEventListener('keydown', inputEventListener);
}

const inputEventListener = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key === 'Shift') return;
}