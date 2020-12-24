export const caesarCipherEncryptor = (string: string, key: number) :string => {
    let encodedString = '';

    const getEncodedChar = (char: number, key: number): string => {
        const startCharCode = 'a'.charCodeAt(0);
        return String.fromCharCode((((char -startCharCode)+key) %26) + startCharCode);

    }

    for (let i = 0; i < string.length; i++) {
        encodedString = encodedString+ getEncodedChar(string.charCodeAt(i), key);
    }
    return encodedString;
}
