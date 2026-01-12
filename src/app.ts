import GameManager, {GameState} from "./GameManager.ts";
import LocalDataProvider from "./provider/LocalDataProvider.ts";
import InputHandler from "./handler/InputHandler.ts";
import Timer from "./observer/Timer.ts";
import EndScreen from "./screen/EndScreen.ts";
import GameScreen from "./screen/GameScreen.ts";
import StartScreen from "./screen/StartScreen.ts";
import {GameConfig} from "./config/GameConfig.ts";

const typingGame = new GameManager(
    GameState.START,
    new StartScreen((config: GameConfig) => {
        typingGame.config = config;
        typingGame.startGame();
    }),
    new GameScreen(),
    new EndScreen(),
    new Timer(),
    InputHandler.getInstance(),
    new LocalDataProvider()
);
