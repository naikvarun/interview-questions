import {sameBSTs} from "../../app/bst/is-same-bst";

describe('Is Same BST', () => {
    test('#1', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])).toBeTruthy();
    });
    test('#2', () => {
        expect(sameBSTs([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])).toBeTruthy();
    });
    test('#3', () => {
        expect(sameBSTs([7, 6, 5, 4, 3, 2, 1], [7, 6, 5, 4, 3, 2, 1])).toBeTruthy();
    });
    test('#4', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2], [10, 8, 5, 15, 2, 12, 94, 81])).toBeTruthy();
    });
    test('#5', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2], [11, 8, 5, 15, 2, 12, 94, 81])).toBeFalsy();
    });
    test('#6', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34], [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100])).toBeTruthy();
    });
    test('#7', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34], [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100])).toBeFalsy();
    });
    test('#8', () => {
        expect(sameBSTs([5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34], [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8])).toBeFalsy();
    });
    test('#9', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34], [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100])).toBeFalsy();
    });
    test('#10', () => {
        expect(sameBSTs([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7])).toBeFalsy();
    });
    test('#11', () => {
        expect(sameBSTs([7, 6, 5, 4, 3, 2, 1], [7, 6, 5, 4, 3, 2, 1, 0])).toBeFalsy();
    });
    test('#12', () => {
        expect(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, 10], [10, 8, 5, 15, 2, 10, 12, 94, 81])).toBeFalsy();
    });
    test('#13', () => {
        expect(sameBSTs([50, 76, 81, 23, 23, 23, 100, 56, 12, -1, 3], [50, 23, 76, 23, 23, 12, 56, 81, -1, 3, 100])).toBeTruthy();
    });

});