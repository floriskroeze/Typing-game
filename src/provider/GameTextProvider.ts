import DataProvider from "./DataProvider.ts";
import {GameText} from "../screen/gameboard/word/setupGameText.ts";

export default class GameTextProvider implements DataProvider<GameText> {
    get(): GameText {
        throw new Error("Method not implemented.");
    }
}