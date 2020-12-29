// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

    addMany(values: number[]): LinkedList {
        let current: LinkedList = this;
        while (current.next !== null) {
            current = current.next;
        }
        for (const value of values) {
            current.next = new LinkedList(value);
            current = current.next;
        }
        return this;
    }

    getNodesInArray() {
        const nodes: number[] = [];
        let current: LinkedList | null = this;
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}


export function removeKthNodeFromEnd(head: LinkedList, k: number) {
    let counter: LinkedList | null = head;

    while (k >= 1) {
        counter = counter!.next;
        k--;
    }
    if(counter !== null ) {
        let tracker: LinkedList | null = head;
        while (counter!.next !== null) {
            counter = counter!.next;
            tracker = tracker!.next;
        }
        tracker!.next = tracker!.next!.next;
    } else {
        head.value = head!.next!.value;
        head.next = head!.next!.next;
    }
    return head;
}