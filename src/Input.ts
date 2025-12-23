import {GameInstance} from "./gameinstance/GameInstance.ts";

export class Input {
    public static createInputField(): HTMLTextAreaElement {
        const newInputField = document.createElement('textarea');
        newInputField.classList = 'absolute hidden h-[20px] resize-none opacity-0';

        return newInputField;
    }

    public static setupInput(gameInstance: GameInstance) {
        gameInstance.inputElement.addEventListener('keydown', (e: KeyboardEvent) => {
            e.preventDefault();
            this.handleKeyDown(e.key, gameInstance);
        });
        gameInstance.inputElement.classList.remove('hidden');
    }

    public static handleKeyDown(key: string, gameInstance: GameInstance): void {
        if(key === 'Shift') return;

        gameInstance.totalCharactersTyped++;

        const currentWord = gameInstance.gameBoard.getGameText().getWords()[gameInstance.currentWordIndex];
        const currentLetter = currentWord.getLetters()[gameInstance.currentLetterIndex];

        !currentLetter.isCorrect(key) && gameInstance.mistakeCount++;

        if (gameInstance.currentLetterIndex === currentWord.getLetters().length - 1) {
            gameInstance.currentWordIndex++;
            gameInstance.currentLetterIndex = 0;
            return;
        }

        gameInstance.currentLetterIndex++;
    }
}