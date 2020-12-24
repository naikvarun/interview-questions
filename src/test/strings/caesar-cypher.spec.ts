import {caesarCipherEncryptor} from "../../app/strings/caesar-cypher";

describe('Caesar Cypher',  () => {
    test('#1', () => {
       expect(caesarCipherEncryptor('xyz', 2)).toBe('zab');
    });
});
