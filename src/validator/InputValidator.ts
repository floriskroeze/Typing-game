import Observer from "../observer/Observer.ts";
import Input from "../observer/Input.ts";
import GameTextIterator from "../iterator/GameTextIterator.ts";

export default class InputValidator implements Observer {
    static singleton: InputValidator;
    private gameTextIterator: GameTextIterator;

    constructor(gameTextIterator?: GameTextIterator) {
        this.gameTextIterator = gameTextIterator ?? new GameTextIterator([]);
        Input.getSingleton().registerObserver(this);
    }

    update<TValue>(value: TValue): void {

        console.log(this.checkInput(value as string, InputValidator.getInstance().gameTextIterator.next() as string));
        console.log(InputValidator.getInstance().getCurrentLetterElement());
    }

    checkInput(input: string, currentIteration: string): boolean {
        return input === currentIteration;
    }

    getCurrentLetterElement(): Element|null {
        if (!this.gameTextIterator.hasNext()) return null;
        return document.querySelectorAll('letter')[this.gameTextIterator.getCurrentIndex()];
    }

    static getInstance(): InputValidator {
        if (!this.singleton) {
            this.singleton = new this();
        }
        return this.singleton;
    }

    setGameTextIterator(gameTextIterator: GameTextIterator) {
        this.gameTextIterator = gameTextIterator;
    }
}