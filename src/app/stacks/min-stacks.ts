export class MinMaxStack {
    private minMaxStack: { min: number, max: number }[] = [];
    private stack: number[] = [];

    public peek(): number {
        return this.stack[this.stack.length - 1];
    }

    pop() {
        this.minMaxStack.pop();
        return this.stack.pop();
    }

    private peekMinMax(): { min: number, max: number } {
        return this.minMaxStack[this.minMaxStack.length - 1];
    }

    push(number: number): void {
        const lastMinMax = this.peekMinMax();
        const updatedMinMax = {...lastMinMax}

            if (!lastMinMax || number < lastMinMax.min) {
                updatedMinMax.min = number;
            }
            if (!lastMinMax || number > lastMinMax.max) {
                updatedMinMax.max = number;
            }
        this.minMaxStack.push(updatedMinMax);
        this.stack.push(number);
    }

    getMin(): number {
        return this.peekMinMax().min;
    }

    getMax(): number {
        return this.peekMinMax().max;
    }
}