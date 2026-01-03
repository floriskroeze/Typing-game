export enum GameScreen {
    START = 'start-screen',
    SETTINGS = 'settings',
    GAMEBOARD = 'gameboard',
    END = 'end-screen'
}

export const getScreen = (screen: GameScreen): Element | null =>{
    return document?.getElementById(screen) ?? null;
}

export const displayScreen = (screen: GameScreen) => {
    getScreen(screen)?.classList.remove('hidden');
}

export const hideScreen = (screen: GameScreen) => {
    getScreen(screen)?.classList.add('hidden');
}