import {GameScreen} from "../constant/gamescreens.ts";

export const getScreenElement = (screen: GameScreen): HTMLElement =>{
    return document?.getElementById(screen)!;
}