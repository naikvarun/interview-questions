import {BinaryTree, findSuccessor} from "../../app/bst/find-inorder-successor";

type BSTNodeType = { id: string, left: string | null, right: string | null, parent: string | null, value: number };

const buildTreeWithId = (nodes: BSTNodeType[], rootId: string | null, parent: BinaryTree | null = null): BinaryTree | null => {

    if (rootId === null) {
        return null;
    }
    const node = nodes.find((item) => item.id === rootId);
    const root = new BinaryTree(node!.value);
    if (parent !== null) {
        root.parent = parent;
    }
    root.left = buildTreeWithId(nodes, node!.left, root);
    root.right = buildTreeWithId(nodes, node!.right, root);

    return root;
}

const getNode = (root: BinaryTree, target: number): BinaryTree | null => {
    if (root.value === target) {
        return root;
    } else if (target < root.value && root.left !== null) {
        return getNode(root.left, target);
    } else if (target > root.value && root.right !== null) {
        return getNode(root.right, target);
    }
    return null;
}

describe('In-Order Next Successor', () => {
    test('#1', () => {
        const root = new BinaryTree(1);
        root.left = new BinaryTree(2);
        root.left.parent = root;
        root.right = new BinaryTree(3);
        root.right.parent = root;
        root.left.left = new BinaryTree(4);
        root.left.left.parent = root.left;
        root.left.right = new BinaryTree(5);
        root.left.right.parent = root.left;
        root.left.left.left = new BinaryTree(6);
        root.left.left.left.parent = root.left.left;
        const node = root.left.right;
        const expected = root;
        const actual = findSuccessor(root, node);
        expect(actual).toEqual(expected);
    });
});