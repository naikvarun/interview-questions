import {isPalindrome} from "../../app/strings/palindrome-check";

describe('Is Palindrome', () => {
    test('#1', () => {
        expect(isPalindrome('abcdcba')).toBeTruthy();
    });

    test('#2', () => {
        expect(isPalindrome('abcd')).toBeFalsy();
    });
});
