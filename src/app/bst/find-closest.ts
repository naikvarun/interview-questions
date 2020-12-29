import {BST} from "./bst";


export const findClosestValueInBst = (tree: BST, target: number): number => {
    const findClosestValueInBstHelper = (root: BST | null, targetValue: number, closest: number): number => {
        if (root === null) {
            return closest;
        }

        if (Math.abs(targetValue - root.value) < Math.abs(targetValue - closest)) {
            closest = root.value;
        }
        if (targetValue < root.value) {
            return findClosestValueInBstHelper(root.left, targetValue, closest);
        } else if (targetValue > root.value) {
            return findClosestValueInBstHelper(root.right, targetValue, closest);
        } else {
            return root.value;
        }
    }

    return findClosestValueInBstHelper(tree, target, tree.value);
}