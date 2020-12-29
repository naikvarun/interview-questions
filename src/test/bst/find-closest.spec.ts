import {BST} from "../../app/bst/bst";
import {findClosestValueInBst} from "../../app/bst/find-closest";

type BSTNodeType = { id: string, left: string | null, right: string | null, value: number };

describe('Find closest Number', () => {

    const treeCases = {
        tree1: {
            nodes: [{"id": "10", "left": "5", "right": "15", "value": 10}, {
                "id": "15",
                "left": "13",
                "right": "22",
                "value": 15
            }, {"id": "22", "left": null, "right": null, "value": 22}, {
                "id": "13",
                "left": null,
                "right": "14",
                "value": 13
            }, {"id": "14", "left": null, "right": null, "value": 14}, {
                "id": "5",
                "left": "2",
                "right": "5-2",
                "value": 5
            }, {"id": "5-2", "left": null, "right": null, "value": 5}, {
                "id": "2",
                "left": "1",
                "right": null,
                "value": 2
            }, {"id": "1", "left": null, "right": null, "value": 1}],
            root: "10"
        },
        tree2: {
            nodes: [{"id": "100", "left": "5", "right": "502", "value": 100}, {
                "id": "502",
                "left": "204",
                "right": "55000",
                "value": 502
            }, {"id": "55000", "left": "1001", "right": null, "value": 55000}, {
                "id": "1001",
                "left": null,
                "right": "4500",
                "value": 1001
            }, {"id": "4500", "left": null, "right": null, "value": 4500}, {
                "id": "204",
                "left": "203",
                "right": "205",
                "value": 204
            }, {"id": "205", "left": null, "right": "207", "value": 205}, {
                "id": "207",
                "left": "206",
                "right": "208",
                "value": 207
            }, {"id": "208", "left": null, "right": null, "value": 208}, {
                "id": "206",
                "left": null,
                "right": null,
                "value": 206
            }, {"id": "203", "left": null, "right": null, "value": 203}, {
                "id": "5",
                "left": "2",
                "right": "15",
                "value": 5
            }, {"id": "15", "left": "5-2", "right": "22", "value": 15}, {
                "id": "22",
                "left": null,
                "right": "57",
                "value": 22
            }, {"id": "57", "left": null, "right": "60", "value": 57}, {
                "id": "60",
                "left": null,
                "right": null,
                "value": 60
            }, {"id": "5-2", "left": null, "right": null, "value": 5}, {
                "id": "2",
                "left": "1",
                "right": "3",
                "value": 2
            }, {"id": "3", "left": null, "right": null, "value": 3}, {
                "id": "1",
                "left": "-51",
                "right": "1-2",
                "value": 1
            }, {"id": "1-2", "left": null, "right": "1-3", "value": 1}, {
                "id": "1-3",
                "left": null,
                "right": "1-4",
                "value": 1
            }, {"id": "1-4", "left": null, "right": "1-5", "value": 1}, {
                "id": "1-5",
                "left": null,
                "right": null,
                "value": 1
            }, {"id": "-51", "left": "-403", "right": null, "value": -51}, {
                "id": "-403",
                "left": null,
                "right": null,
                "value": -403
            }],
            root: "100"
        }
    }


    const buildTreeWithId = (nodes: BSTNodeType[], rootId: string | null): BST | null => {

        if (rootId === null) {
            return null;
        }
        const node = nodes.find((item) => item.id === rootId);
        const root = new BST(node!.value);
        root.left = buildTreeWithId(nodes, node!.left);
        root.right = buildTreeWithId(nodes, node!.right);

        return root;
    }
    test('Test Case #1', function () {
        const root = buildTreeWithId(treeCases.tree1.nodes, treeCases.tree1.root);
        expect(findClosestValueInBst(root!, 12)).toBe(13);
    });
    test('Test Case #2', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 100)).toBe(100);
    });
    test('Test Case #3', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 208)).toBe(208);
    });
    test('Test Case #4', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 4500)).toBe(4500);
    });
    test('Test Case #5', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 4501)).toBe(4500);
    });
    test('Test Case #6', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, -70)).toBe(-51);
    });
    test('Test Case #7', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 2000)).toBe(1001);
    });
    test('Test Case #8', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 6)).toBe(5);
    });
    test('Test Case #9', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 30000)).toBe(55000);
    });
    test('Test Case #10', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, -1)).toBe(1);
    });
    test('Test Case #11', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 29751)).toBe(55000);
    });
    test('Test Case #12', function () {
        const root = buildTreeWithId(treeCases.tree2.nodes, treeCases.tree2.root);
        expect(findClosestValueInBst(root!, 29749)).toBe(4500);
    });

});