import {GameStates} from "../constant/gamestates.ts";
import {Difficulty, GameLength, KeyOfDifficulty, KeyOfGameLength} from "../constant/settings.ts";
import {getFormDataFromEventCurrentTarget} from "../helpers/form.ts";
import Clock from "../observer/Clock.ts";
import {ClockDisplay} from "./display/ClockDisplay.ts";
import ScreenState from "../state/ScreenState.ts";
import Input from "../observer/Input.ts";

export default class GameUI {
    constructor() {
        this.initGlobalEventListeners();
    }

    private initGlobalEventListeners() {
        ScreenState.getInstance().getScreen('start').querySelector('form')!.addEventListener('submit', this.setupGame);
    }

    private initClock(time: number) {
        const clock = Clock.getInstance();
        clock.stop();
        clock.setTime(time);
        ClockDisplay.getInstance().setInnerHTML(clock.getTimeString());
    }

    private initGameBoard(difficulty: number) {

    }

    private setupGame = (e: SubmitEvent) => {
        e.preventDefault();
        const screenState = ScreenState.getInstance();
        screenState.setCurrentState(GameStates.PLAYING);

        const settingsFormData: FormData = getFormDataFromEventCurrentTarget(e.currentTarget);
        const gameLength = settingsFormData.get('gameLength') as KeyOfGameLength;
        const difficulty = settingsFormData.get('difficulty') as KeyOfDifficulty;

        this.initClock(GameLength[gameLength]);
        this.initGameBoard(Difficulty[difficulty]);
        Input.getInstance().registerToDocument();

        screenState.showScreen('game');
    }
}