export const runLengthEncoding = (string: string): string => {
    let encodedString = '';
    let count =1;
    const encode = (char: string, count: number ): void => {
        encodedString += `${count}${char}`;
    }
    for (let i = 1; i < string.length; i++) {
        if (string.charAt(i-1) !== string.charAt(i) || count === 9) {
            encode(string.charAt(i-1), count);
            count =0;
        }
        count++;
    }
    encode(string.charAt(string.length-1), count);
    return encodedString;
}