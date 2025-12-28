const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vitae est quis vehicula. Sed ut dui a mi sagittis dictum. Donec commodo rhoncus posuere. Morbi egestas ac odio faucibus finibus. Sed venenatis euismod sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sem ut lacinia tristique. Proin pellentesque, tortor et imperdiet dignissim, nisl orci venenatis lacus, sit amet sagittis diam sapien sit amet leo. Suspendisse egestas bibendum orci et fermentum.";
if (!document) throw new Error('Document not found.');
const startScreen = document.getElementById('start-screen');
const settingsScreen = document.getElementById('settings');
const gameboard = document?.getElementById('gameboard');
const endScreen = document.getElementById('end-screen');

if (!startScreen || !settingsScreen || !gameboard || !endScreen) throw new Error("One of the required screens was not found.");

const setupStartScreen = () => {
    const startButton = startScreen?.querySelector('button#start');

    if (!startButton) throw new Error('Start button not found.');
    startButton.addEventListener('click', (e: Event) => {
        e.preventDefault();


        console.log("Start button clicked.");
    })
    console.log("Start button initiated");
}

setupStartScreen();

const setupSettingsScreen = () => {
    console.log("Settings screen initiated");
}

const setupGameboard = () => {
    console.log("Gameboard initiated");
}

type GameText = Word[];
type Word = Letter[];
type Letter = string;



const generateGameText = (text: string): GameText => {
    const words = text.split(' ');

    return words.map(word => word.split('').map(letter => letter));
}

console.log(generateGameText(testText));