import {balancedBrackets} from "../../app/stacks/balanced-brackets";

describe('Balanced Brackets', () => {
    test('Test Case #1', () => {
        expect(balancedBrackets('([])(){}(())()()')).toBeTruthy();
    });
    test('Test Case #2', () => {
        expect(balancedBrackets('()[]{}{')).toBeFalsy();
    });
    test('Test Case #3', () => {
        expect(balancedBrackets('(((((({{{{{[[[[[([)])]]]]]}}}}}))))))')).toBeFalsy();
    });
    test('Test Case #4', () => {
        expect(balancedBrackets('()()[{()})]')).toBeFalsy();
    });
    test('Test Case #5', () => {
        expect(balancedBrackets('(()())((()()()))')).toBeTruthy();
    });
    test('Test Case #6', () => {
        expect(balancedBrackets('{}()')).toBeTruthy();
    });
    test('Test Case #7', () => {
        expect(balancedBrackets('()([])')).toBeTruthy();
    });
    test('Test Case #8', () => {
        expect(balancedBrackets('((){{{{[]}}}})')).toBeTruthy();
    });
    test('Test Case #9', () => {
        expect(balancedBrackets('((({})()))')).toBeTruthy();
    });
    test('Test Case #10', () => {
        expect(balancedBrackets('(([]()()){})')).toBeTruthy();
    });
    test('Test Case #11', () => {
        expect(balancedBrackets('(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())')).toBeTruthy();
    });
    test('Test Case #12', () => {
        expect(balancedBrackets('{[[[[({(}))]]]]}')).toBeFalsy();
    });
    test('Test Case #13', () => {
        expect(balancedBrackets('[((([])([]){}){}){}([])[]((())')).toBeFalsy();
    });
    test('Test Case #14', () => {
        expect(balancedBrackets(')[]}')).toBeFalsy();
    });
    test('Test Case #15', () => {
        expect(balancedBrackets('(a)')).toBeTruthy();
    });
    test('Test Case #16', () => {
        expect(balancedBrackets('(a(')).toBeFalsy();
    });
    test('Test Case #17', () => {
        expect(balancedBrackets('(141[])(){waga}((51afaw))()hh()')).toBeTruthy();
    });
    test('Test Case #18', () => {
        expect(balancedBrackets('aafwgaga()[]a{}{gggg')).toBeFalsy();
    });
    test('Test Case #19', () => {
        expect(balancedBrackets('(((((({{{{{safaf[[[[[([)]safsafsa)]]]]]}}}gawga}}))))))')).toBeFalsy();
    });
    test('Test Case #20', () => {
        expect(balancedBrackets('()(agawg)[{()gawggaw})]')).toBeFalsy();
    });
    test('Test Case #21', () => {
        expect(balancedBrackets('(()agwg())((()agwga()())gawgwgag)')).toBeTruthy();
    });
    test('Test Case #22', () => {
        expect(balancedBrackets('{}gawgw()')).toBeTruthy();
    });
    test('Test Case #23', () => {
        expect(balancedBrackets('(agwgg)([ghhheah%&@Q])')).toBeTruthy();
    });
});


/*

const cases: {string: string, output: boolean}[]  = [
    {string: "([])(){}(())()()", output: true},
    {string: "()[]{}{", output: false},
    {string: "(((((({{{{{[[[[[([)])]]]]]}}}}}))))))", output: false},
    {string: "()()[{()})]", output: false},
    {string: "(()())((()()()))", output: true},
    {string: "{}()", output: true},
    {string: "()([])", output: true},
    {string: "((){{{{[]}}}})", output: true},
    {string: "((({})()))", output: true},
    {string: "(([]()()){})", output: true},
    {
        string: "(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())"
        ,output: true
    },
    {string: "{[[[[({(}))]]]]}", output: false},
    {string: "[((([])([]){}){}){}([])[]((())", output: false},
    {string: ")[]}", output: false},
    {string: "(a)", output: true},
    {string: "(a(", output: false},
    {string: "(141[])(){waga}((51afaw))()hh()", output: true},
    {string: "aafwgaga()[]a{}{gggg", output: false},
    {string: "(((((({{{{{safaf[[[[[([)]safsafsa)]]]]]}}}gawga}}))))))", output: false},
    {string: "()(agawg)[{()gawggaw})]", output: false},
    {string: "(()agwg())((()agwga()())gawgwgag)", output: true},
    {string: "{}gawgw()", output: true},
    {string: "(agwgg)([ghhheah%&@Q])", output: true}
];

cases.forEach((item, index) => {
    console.log(` test('Test Case #${index+1}', () => {
        expect(balancedBrackets('${item.string}')).toBe${item.output ? 'Truthy': 'Falsy'}();
    });`)
});
* */

