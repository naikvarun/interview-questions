import {dijkstrasAlgorithm} from "../../app/algo/dijkstra";

describe('Dijkstra\'s Algorithm', () => {

    test('Test Case #1', function () {
        const start = 0;
        const edges = [
            [[1, 7]],
            [
                [2, 6],
                [3, 20],
                [4, 3],
            ],
            [[3, 14]],
            [[4, 2]],
            [],
            [],
        ];
        const expected = [0, 7, 13, 27, 10, -1];
        const actual = dijkstrasAlgorithm(start, edges);
        expect(actual).toEqual(expected);
    });
});