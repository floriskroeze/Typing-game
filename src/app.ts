import GameManager from "./GameManager.ts";
import LocalDataProvider from "./provider/LocalDataProvider.ts";
import Timer from "./observer/Timer.ts";
import EndScreen from "./screen/EndScreen.ts";
import GameScreen from "./screen/GameScreen.ts";
import StartScreen from "./screen/StartScreen.ts";
import {GameConfig} from "./config/GameConfig.ts";
import {GameState} from "./constant/GameState.ts";
import StrictInputHandler from "./handler/StrictInputHandler.ts"

const gameScreen = new GameScreen();

const typingGame = new GameManager(
    GameState.START,
    {difficulty: 1, gameLength: 10},
    new StartScreen((config: GameConfig) => {
        typingGame.config = config;
        typingGame.startGame();
    }),
    gameScreen,
    new EndScreen(),
    new Timer(),
    new StrictInputHandler(
        () => {
            return
        },
        (index, isCorrect) => gameScreen.markLetter(index, isCorrect),
    ),
    new LocalDataProvider()
);
