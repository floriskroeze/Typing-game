public createWordElement(index?: number): void {
    this.wordElement.classList.add('word');
    if (index === 0) this.wordElement.classList.add('active');
}

public getWordElement(): Element {
    return this.wordElement;
}§

public renderLettersForWord(wordElement: Element|null): void {
    this.getLetters().forEach(letter => {
        this.wordElement?.appendChild(letter.getLetterElement());
    });
}

public setWords(text: string) {
    const arrayOfWords = text.split(' ');

    arrayOfWords.forEach((word, index) => {
        const newWord = Word.create(word, index);
        const space = Word.create(" ");

        this.words.push(newWord);

        if (index === arrayOfWords.length - 1) return;

        this.words.push(space);
    });
}