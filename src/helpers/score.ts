export type GameScore = {
    wpm: number,
    accuracy: number
}

export const calculateScore = (wpm: number, accuracy: number): GameScore => {
    return {
        wpm, accuracy
    }
}