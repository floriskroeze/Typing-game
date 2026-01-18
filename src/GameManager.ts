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

    startGame(): void {
        this.enterState(GameState.PLAYING);
    }

    endGame(): void {
        this.enterState(GameState.FINISHED);
    }

    private enterState(newState: GameState) {
        this.exitCurrentState();
        this.currentState = newState;
        this.enterCurrentState();
    }

    private exitCurrentState() {
        switch (this.currentState) {
            case GameState.START:
                this.handleStartExit();
                break;
            case GameState.PLAYING:
                this.handlePlayingExit();
                break;
            case GameState.FINISHED:
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
            case GameState.FINISHED:
                this.handleEndEnter();
                break;
        }

        setActiveScreen(ScreenID[this.currentState.toUpperCase() as keyof typeof ScreenID]);
    }

    private handlePlayingEnter(): void {
        this.setupGameText();

        this.inputHandler.focusInput();
        this.inputHandler.activeFocusManagement();

        this.setupGameTimer();
    }

    private handleEndEnter(): void {
    }

    private handleStartExit(): void {
        this.startScreen.reset();
    }

    private handlePlayingExit(): void {
        this.gameScreen.reset();
    }

    private handleEndExit(): void {
        this.endScreen.reset();
    }

    private resetGame(): void {
        throw new Error("Method not implemented.");
    }

    private setupGameText(): void {
        const text = this.localDataProvider.getText(this.config);

        this.gameScreen.renderText(text);
        this.gameScreen.updateCurrentLetter(0);

        this.inputHandler.setText(text);
    }

    private setupGameTimer(): void {
        this.timer = new Timer(() => this.endGame());
        this.gameScreen.timerDisplay.setTimer(this.timer);

        this.timer.setTime(this.config.gameLength);

        this.inputHandler.setOnStart(() => this.timer.start());
    }
}