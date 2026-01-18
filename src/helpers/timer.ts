
export const formatTime = (minutes: number, seconds: number) => {
    return `${minutes.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping: false})} : ${seconds.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping: false})}`;
}

export const calculateMinutes = (time: number) => {
    return Math.floor(time / 60);
};

export const calculateSeconds = (time: number) => {
    return time % 60;
};
