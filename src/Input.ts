import {GameInstance} from "./game-instance/GameInstance.ts";

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
        const gameState = gameInstance.gameState;
        const currentLetterIndex = gameState.currentLetterIndex;

        gameState.incrementTotalCharactersTyped();

        const currentWord = gameInstance.gameBoard.getGameText().getWords()[gameState.currentWordIndex];
        const currentLetter = currentWord.getLetters()[currentLetterIndex];

        !currentLetter.isCorrect(key) && gameState.incrementMistakeCount();

        if (currentLetterIndex === currentWord.getLetters().length - 1) {
            gameState.incrementCurrentWordIndex();
            gameState.currentLetterIndex = 0;
            return;
        }

        gameState.incrementCurrentLetterIndex();
    }
}