import {GameStates} from "../constant/gamestates.ts";
import {getScreenElement} from "../helpers/screen.ts";
import {GameScreen, ScreenID} from "../constant/screens.ts";

export default class ScreenState {
    static instance: ScreenState | undefined;
    private currentState: GameStates = GameStates.START;

    private screens: Record<string, HTMLElement> = {
        start: getScreenElement(GameScreen.START),
        game: getScreenElement(ScreenID.GAMEBOARD),
        end: getScreenElement(GameScreen.END)
    }

    private constructor(){}

    getScreen(screenName: string): HTMLElement {
        return this.screens[screenName];
    }

    setCurrentState(state: GameStates) {
        this.currentState = state;
    }

    showScreen(screenName: keyof typeof this.screens) {
        Object.values(this.screens).forEach(el => el.classList.add("hidden"));
        this.screens[screenName].classList.remove("hidden");
    }

    static getCurrentScreen() {
        const screenState = this.getInstance();
        return screenState.currentState;
    }

    static getInstance(): ScreenState {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}