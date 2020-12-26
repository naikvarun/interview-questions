import {balancedBrackets} from "../../app/stacks/balanced-brackets";

describe('Balanced Brackets', () => {
    test('Test Case #1', () => {
        expect(balancedBrackets('([])(){}(())()()')).toBeTruthy();
    });
})

