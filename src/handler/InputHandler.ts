import Observer from "../interface/Observer.ts";
import GameTextIterator from "../iterator/GameTextIterator.ts";
import {setLetterElementCorrectState} from "../helpers/letter-element.ts";
import Input from "../observer/Input.ts";

export default class InputHandler implements Observer<string> {
    private static instance: InputHandler | undefined;
    private gameTextIterator: GameTextIterator = new GameTextIterator([]);

    private constructor() {
        Input.getInstance().registerObserver(this)
    }

    private isCorrect(input: string, currentLetter: string) {
        return input === currentLetter;
    }

    update(value: string) {
        const currentLetter = this.gameTextIterator.next();
        const currentIndex = this.gameTextIterator.getCurrentIndex();

        setLetterElementCorrectState(currentIndex, this.isCorrect(value, currentLetter))
    }

    setGameTextIterator(gameTextIterator: GameTextIterator) {
        this.gameTextIterator = gameTextIterator;
    }

    static getInstance(): InputHandler {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}