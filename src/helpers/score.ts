export type GameScore = {
    wpm: WPMObject,
    accuracy: number
}

export const calculateScore = (charsTyped: number, mistakeCount: number, gameLength: number): GameScore => {
    const wpm: WPMObject = calculateWPM(charsTyped, gameLength, mistakeCount);
    const accuracy = calculateAccuracy(charsTyped, mistakeCount);

    return {
        wpm, accuracy
    }
}

type WPMObject = {
    grossWPM: number,
    netWPM: number
}

const calculateWPM = (charsTyped: number, gameLength: number, mistakeCount: number): WPMObject => {
    const grossWPM = calculateGrossWPM(charsTyped, gameLength);
    const netWPM = calculateNetWPM(grossWPM, gameLength, mistakeCount);

    return {
        grossWPM,
        netWPM
    };
}

const calculateNetWPM = (grossWPM: number, gameLength: number, mistakeCount: number): number => {
    return grossWPM - (mistakeCount / (gameLength / 60))
}

const calculateGrossWPM = (charsTyped: number, gameLength: number): number => {
    return (charsTyped / 5) / (gameLength / 60);
}

const calculateAccuracy = (charsTyped: number, mistakeCount: number)=> {
    return  100 - ((mistakeCount / charsTyped) * 100);
}