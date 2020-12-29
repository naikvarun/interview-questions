import {LinkedList, removeKthNodeFromEnd} from "../../app/linked-list/remove-kth-node";


describe('Remove kth Node from end', () => {
    test('Test Case #1', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 3, 4, 5, 7, 8, 9]);
        removeKthNodeFromEnd(test, 4);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #2', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8]);
        removeKthNodeFromEnd(test, 1);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #3', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 9]);
        removeKthNodeFromEnd(test, 2);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #4', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 8, 9]);
        removeKthNodeFromEnd(test, 3);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #5', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 3, 4, 6, 7, 8, 9]);
        removeKthNodeFromEnd(test, 5);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #6', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 3, 5, 6, 7, 8, 9]);
        removeKthNodeFromEnd(test, 6);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #7', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 2, 4, 5, 6, 7, 8, 9]);
        removeKthNodeFromEnd(test, 7);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #8', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([1, 3, 4, 5, 6, 7, 8, 9]);
        removeKthNodeFromEnd(test, 8);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #9', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(0).addMany([2, 3, 4, 5, 6, 7, 8, 9]);
        removeKthNodeFromEnd(test, 9);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
    test('Test Case #10', function () {
        const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const expected = new LinkedList(1).addMany([ 2, 3, 4, 5, 6, 7, 8, 9]);
        removeKthNodeFromEnd(test, 10);
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });
});
/*
type  NodeType = { id: string, value: number, next: string | null };
const buildLinkedList = (nodes: NodeType[], head: string) => {
    let current: string | null = head;
    let currentNode = nodes.find((item) => item.id === current);
    current = currentNode!.next;
    const nextNodes: number[] = [];
    while (current !== null) {
        const currentNode = nodes.find((item) => item.id === current);
        nextNodes.push(currentNode!.value);
        current = currentNode!.next;
    }
    return nextNodes;
};

const cases: any[] = [
    {
        "k": 4,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "7", "value": 5 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },
    {
        "k": 1,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": null, "value": 8 }
            ]
        }
    },
    {
        "k": 2,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "9", "value": 7 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },

    {
        "k": 3,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "8", "value": 6 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },
    {
        "k": 5,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "6", "value": 4 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },

    {
        "k": 6,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "5", "value": 3 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },

    {
        "k": 7,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "4", "value": 2 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },
    {
        "k": 8,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "3", "value": 1 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },
    {
        "k": 9,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output: {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "2", "value": 0 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    },
    {
        "k": 10,
        "linkedList": {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        },
        output : {
            "head": "0",
            "nodes": [
                { "id": "0", "next": "1", "value": 0 },
                { "id": "1", "next": "2", "value": 1 },
                { "id": "2", "next": "3", "value": 2 },
                { "id": "3", "next": "4", "value": 3 },
                { "id": "4", "next": "5", "value": 4 },
                { "id": "5", "next": "6", "value": 5 },
                { "id": "6", "next": "7", "value": 6 },
                { "id": "7", "next": "8", "value": 7 },
                { "id": "8", "next": "9", "value": 8 },
                { "id": "9", "next": null, "value": 9 }
            ]
        }
    }];

cases.forEach((item, index) => {
    console.log(`test('Test Case #${index+1}', function () {
        const test = new LinkedList(0).addMany([${buildLinkedList(item.linkedList.nodes, item.linkedList.head)}]);
        const expected = new LinkedList(0).addMany([${buildLinkedList(item.output.nodes, item.output.head)}]);
        removeKthNodeFromEnd(test, ${item.k});
        expect(test.getNodesInArray()).toEqual(expected.getNodesInArray());
    });`);
});
*/