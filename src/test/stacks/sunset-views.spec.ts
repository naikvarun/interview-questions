import {Direction, sunsetViews} from "../../app/stacks/sunset-views";

describe('Sunset Views', () => {
    test('Test Case #1', () => {
        expect(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.East)).toEqual([1, 3, 6, 7]);
    });

    test('Test Case #2', () => {
        expect(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.West)).toEqual([0, 1]);
    });
});

