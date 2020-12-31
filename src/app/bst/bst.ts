export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value: number): BST {
        let subTree = value < this.value ? this.left : this.right;
        if (subTree !== null) {
            subTree.insert(value);
        } else {
            subTree = new BST(value);
            if (value < this.value) {
                this.left = subTree;
            } else {
                this.right = subTree;
            }
        }
        return this;
    }

    contains(value: number): boolean {
        if (this.value === value) {
            return true;
        }
        const subTree = value < this.value ? this.left : this.right;
        if (subTree !== null) {
            return subTree.contains(value);
        }
        return false;
    }

    remove(value: number): BST {
        // TODO: Write your code here.
        // Do not edit the return statement of this method.
        return this;
    }
}