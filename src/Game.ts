import Clock from "./observer/Clock.ts";
import GameUI from "./UI/GameUI.ts";
import GameState from "./state/GameState.ts";

export default class Game {
    private static instance: Game | undefined;
    private UI: GameUI;
    private clock: Clock | undefined;
    private state: GameState | undefined;

    private constructor() {
        this.UI = new GameUI();
        this.clock = Clock.getInstance();
        this.state = GameState.getInstance();
    }

    static getInstance(): Game {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}