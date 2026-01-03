import GameRound from "./game-round/GameRound.ts";

export default class Application {
    static gameRound: GameRound;

    startGameRound(gameRound: GameRound) {
        Application.gameRound = gameRound;
    }
}