import {caesarCipherEncryptor} from "../../app/strings/caesar-cypher";

describe('Caesar Cypher',  () => {
    test('#1', () => {
        expect(caesarCipherEncryptor('xyz', 2)).toBe('zab');
    });
    test('#2', () => {
        expect(caesarCipherEncryptor('abc', 0)).toBe('abc');
    });
    test('#3', () => {
        expect(caesarCipherEncryptor('abc', 3)).toBe('def');
    });
    test('#4', () => {
        expect(caesarCipherEncryptor('xyz', 5)).toBe('cde');
    });
    test('#5', () => {
        expect(caesarCipherEncryptor('abc', 26)).toBe('abc');
    });
    test('#6', () => {
        expect(caesarCipherEncryptor('abc', 52)).toBe('abc');
    });
    test('#7', () => {
        expect(caesarCipherEncryptor('abc', 57)).toBe('fgh');
    });
    test('#8', () => {
        expect(caesarCipherEncryptor('xyz', 25)).toBe('wxy');
    });
    test('#9', () => {
        expect(caesarCipherEncryptor('iwufqnkqkqoolxzzlzihqfm', 25)).toBe('hvtepmjpjpnnkwyykyhgpel');
    });
    test('#10', () => {
        expect(caesarCipherEncryptor('ovmqkwtujqmfkao', 52)).toBe('ovmqkwtujqmfkao');
    });
    test('#11', () => {
        expect(caesarCipherEncryptor('mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf', 7)).toBe('tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm');
    });
    test('#12', () => {
        expect(caesarCipherEncryptor('kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh', 15)).toBe('zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw');
    });
});

/*
const cases: {key: number, string: string, output: string}[] = [
    {"key": 2, "string": "xyz", output: "zab"},
    {"key": 0, "string": "abc", output: "abc"},
    {"key": 3, "string": "abc", output: "def"},
    {"key": 5, "string": "xyz",output: "cde"},
    {"key": 26, "string": "abc",output: "abc"},
    {"key": 52, "string": "abc", output: "abc"},
    {"key": 57, "string": "abc", output:  "fgh"},
    {"key": 25, "string": "xyz",output: "wxy"},
    {"key": 25, "string": "iwufqnkqkqoolxzzlzihqfm", output: "hvtepmjpjpnnkwyykyhgpel"},
    {"key": 52, "string": "ovmqkwtujqmfkao", output: "ovmqkwtujqmfkao"},
    {"key": 7, "string": "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf", output: "tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm"},
    {"key": 15, "string": "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh",output: "zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw"}
]

cases.forEach((item, index) => {
    console.log(`test('#${index+1}', () => {
       expect(caesarCipherEncryptor('${item.string}', ${item.key})).toBe('${item.output}');
    });`)
});
*/