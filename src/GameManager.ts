import Timer from "./observer/Timer.ts";
import StartScreen from "./screen/StartScreen.ts";
import GameScreen from "./screen/GameScreen.ts";
import EndScreen from "./screen/EndScreen.ts";
import LocalDataProvider from "./provider/LocalDataProvider.ts";
import InputHandler from "./handler/InputHandler.ts";
import {Config} from "./constant/settings.ts";
import {GameConfig} from "./config/GameConfig.ts";

export enum GameState {
    START = 'start',
    PLAYING = 'playing',
    END = 'end'
}

export default class GameManager {
    currentState: GameState;
    config: GameConfig | undefined;
    startScreen: StartScreen;
    gameScreen: GameScreen;
    endScreen: EndScreen;
    timer: Timer;
    inputHandler: InputHandler;
    gameTextProvider: LocalDataProvider;

    constructor(
        currentState: GameState,
        startScreen: StartScreen,
        gameScreen: GameScreen,
        endScreen: EndScreen,
        timer: Timer,
        inputHandler: InputHandler,
        gameTextProvider: LocalDataProvider
    ) {
        this.startScreen = startScreen;
        this.gameScreen = gameScreen;
        this.endScreen = endScreen;
        this.timer = timer;
        this.inputHandler = inputHandler;
        this.gameTextProvider = gameTextProvider;

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
                this.handleStartEnter();
                break;
            case GameState.PLAYING:
                this.handlePlayingEnter();
                break;
            case GameState.END:
                this.handleEndEnter();
                break;
        }
    }

    private handleStartEnter(): void {
        console.log("Method not implemented.");
    }

    private handlePlayingEnter(): void {
    }

    private handleEndEnter(): void {
        throw new Error("Method not implemented.");
    }

    private handleStartExit(): void {
        console.log(this.startScreen);
        this.startScreen.reset();
    }

    private handlePlayingExit(): void {
        throw new Error("Method not implemented.");
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