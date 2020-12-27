import {MinMaxStack} from "../../app/stacks/min-stacks";

describe('Min Max Stacks', () => {

    const testMinMaxPeek = (min: number, max: number, peek: number, stack: MinMaxStack) => {
        expect(stack.getMin()).toBe(min);
        expect(stack.getMax()).toBe(max);
        expect(stack.peek()).toBe(peek);
    }

    test('#1', () => {
        const stack = new MinMaxStack();
        stack.push(5);
        testMinMaxPeek(5, 5, 5, stack);
        stack.push(7);
        testMinMaxPeek(5, 7, 7, stack);
        stack.push(2);
        testMinMaxPeek(2, 7, 2, stack);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(7);
        testMinMaxPeek(5, 5, 5, stack);
    });
});
