// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
    parent: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
    const buildInOrder = (root: BinaryTree|null): BinaryTree[] => {
        if(root === null ) {
            return [];
        }
        return [...buildInOrder(root.left), root, ...buildInOrder(root.right)];
    }

    const inOrder  = buildInOrder(tree);
    for (let i = 0; i < inOrder.length; i++) {
        if (inOrder[i] == node) {
            return inOrder[i+1];
        }
    }
    return null;
}

