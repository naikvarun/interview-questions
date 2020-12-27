import {isPalindrome} from "../../app/strings/palindrome-check";

describe('Is Palindrome', () => {
    test('#1', () => {
        expect(isPalindrome('abcdcba')).toBeTruthy();
    });
    test('#2', () => {
        expect(isPalindrome('a')).toBeTruthy();
    });
    test('#3', () => {
        expect(isPalindrome('ab')).toBeFalsy();
    });
    test('#4', () => {
        expect(isPalindrome('aba')).toBeTruthy();
    });
    test('#5', () => {
        expect(isPalindrome('abb')).toBeFalsy();
    });
    test('#6', () => {
        expect(isPalindrome('abba')).toBeTruthy();
    });
    test('#7', () => {
        expect(isPalindrome('abcdefghhgfedcba')).toBeTruthy();
    });
    test('#8', () => {
        expect(isPalindrome('abcdefghihgfedcba')).toBeTruthy();
    });
    test('#9', () => {
        expect(isPalindrome('abcdefghihgfeddcba')).toBeFalsy();
    });
});

/*const cases: {string: string, output : boolean }[] = [{string: "abcdcba", output: true},
    {string: "a", output: true},
    {string: "ab", output: false},
    {string: "aba", output: true},
    {string: "abb", output: false},
    {string: "abba",  output: true},
    {string: "abcdefghhgfedcba", output: true},
    {string: "abcdefghihgfedcba", output: true},
    {string: "abcdefghihgfeddcba", output: false}]

cases.forEach((item, index) => {
    console.log(`test('#${index+1}', () => {
        expect(isPalindrome('${item.string}')).toBe${item.output ? 'Truthy': 'Falsy'}();
    });`)
});*/