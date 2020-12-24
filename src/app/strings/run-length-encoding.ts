export const runLengthEncoding = (string: string): string => {
    let encodedString = '';
    const previous: { char: string, count: number } = {char: string.charAt(0), count: 1}
    const encode = (encoding: { char: string, count: number }): void => {
        encodedString += `${encoding.count}${encoding.char}`;
    }
    for (let i = 1; i < string.length; i++) {
        if (previous.char !== string.charAt(i)) {
            encode(previous);
            previous.char = string.charAt(i);
            previous.count = 1;
        } else {
            previous.count += 1;
            if (previous.count === 10) {
                encode({char: previous.char, count: 9});
                previous.count = 1;
            }
        }
    }
    encode(previous);
    return encodedString;
}