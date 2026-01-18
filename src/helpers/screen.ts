import {ScreenID} from "../constant/ScreenID.ts";

export const getScreenElement = (screen: ScreenID): HTMLElement =>{
    return document?.getElementById(screen)!;
}

export const setActiveScreen = (screen: ScreenID) => {
    [ScreenID.START, ScreenID.PLAYING, ScreenID.FINISHED].forEach(el => getScreenElement(el).classList.add('hidden'));
    getScreenElement(screen).classList.remove('hidden');
}