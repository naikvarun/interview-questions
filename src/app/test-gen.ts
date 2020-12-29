type NodeType = { id: string, value: number, next: string | null };

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