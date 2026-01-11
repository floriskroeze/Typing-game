import GameManager, {GameState} from "./GameManager.ts";
import StartScreen from "./screen/StartScreen.ts";
import GameTextProvider from "./provider/GameTextProvider.ts";
import InputHandler from "./handler/InputHandler.ts";
import Timer from "./observer/Timer.ts";
import EndScreen from "./screen/EndScreen.ts";
import GameScreen from "./screen/GameScreen.ts";

const currentState = GameState.START
const gameScreen = new GameScreen();
const endScreen = new EndScreen();
const timer = new Timer();
const inputHandler = InputHandler.getInstance();
const gameTextProvider = new GameTextProvider();


const typingGame = new GameManager(
    currentState,
    gameScreen,
    endScreen,
    timer,
    inputHandler,
    gameTextProvider
);
