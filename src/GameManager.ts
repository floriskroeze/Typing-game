import Timer from "./observer/Timer.ts";
import StartScreen from "./screen/StartScreen.ts";
import GameScreen from "./screen/GameScreen.ts";
import EndScreen from "./screen/EndScreen.ts";
import LocalDataProvider from "./provider/LocalDataProvider.ts";
import {GameConfig} from "./config/GameConfig.ts";
import {setActiveScreen} from "./helpers/screen.ts";
import {ScreenID} from "./constant/ScreenID.ts";
import {GameState} from "./constant/GameState.ts";
import StrictInputHandler from "./handler/StrictInputHandler.ts";

export default class GameManager {
    currentState: GameState;
    config: GameConfig;
    startScreen: StartScreen;
    gameScreen: GameScreen;
    endScreen: EndScreen;
    timer: Timer;
    inputHandler: StrictInputHandler;
    localDataProvider: LocalDataProvider;

    constructor(
        currentState: GameState,
        config: GameConfig,
        startScreen: StartScreen,
        gameScreen: GameScreen,
        endScreen: EndScreen,
        timer: Timer,
        inputHandler: StrictInputHandler,
        localDataProvider: LocalDataProvider
    ) {
        this.config = config;
        this.startScreen = startScreen;
        this.gameScreen = gameScreen;
        this.endScreen = endScreen;
        this.timer = timer;
        this.inputHandler = inputHandler;
        this.localDataProvider = localDataProvider;

        this.currentState = currentState;
        this.enterState(currentState);
    }

    enterState(newState: GameState) {
        this.exitCurrentState();
        this.currentState = newState;
        this.enterCurrentState();
    }

    exitCurrentState() {
        switch (this.currentState) {
            case GameState.START:
                this.handleStartExit();
                break;
            case GameState.PLAYING:
                this.handlePlayingExit();
                break;
            case GameState.END:
                this.handleEndExit();
                break;
        }
    }

    private enterCurrentState() {
        switch (this.currentState) {
            case GameState.START:
                break;
            case GameState.PLAYING:
                this.handlePlayingEnter();
                break;
            case GameState.END:
                this.handleEndEnter();
                break;
        }
    }

    private handlePlayingEnter(): void {
        setActiveScreen(ScreenID[this.currentState.toUpperCase() as keyof typeof ScreenID]);

        const text = this.localDataProvider.getText(this.config);
        this.gameScreen.renderText(text);

        this.inputHandler.setText(text);

        this.inputHandler.focusInput();
        this.inputHandler.activeFocusManagement();

        this.gameScreen.updateCurrentLetter(0);

        this.timer = new Timer();

    }

    private handleEndEnter(): void {
        throw new Error("Method not implemented.");
    }

    private handleStartExit(): void {
        this.startScreen.reset();
    }

    private handlePlayingExit(): void {
        this.gameScreen.reset();
    }

    private handleEndExit(): void {
        throw new Error("Method not implemented.");
    }

    startGame(): void {
        this.enterState(GameState.PLAYING);
    }

    endGame(): void {
        this.enterState(GameState.END);
    }

    resetGame(): void {
        throw new Error("Method not implemented.");
    }
}