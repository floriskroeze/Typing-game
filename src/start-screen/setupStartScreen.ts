import setupSettingsScreen from "../settings-screen/setupSettingsScreen.ts";
import {displayScreen, GameScreen, getScreen, hideScreen} from "../helpers/screen.ts";

export default function () {
    if (!getScreen(GameScreen.START)) throw new Error('Start screen not found.');
    setupStartButton();
    displayScreen(GameScreen.START);
}

const setupStartButton = () => {
    const startButton = getScreen(GameScreen.START)?.querySelector('button#start');

    if (!startButton) throw new Error('Start button not found.');

    startButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        setupSettingsScreen();
        hideScreen(GameScreen.START);
    });
}