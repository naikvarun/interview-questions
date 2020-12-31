import {topologicalSort} from "../../app/algo/topological-sort";

describe('Topological Sort', () => {

    type Dependency = [number, number];

    test('Test Case #1', function () {
        const jobs = [1, 2, 3, 4];
        const deps: Dependency[] = [
            [1, 2],
            [1, 3],
            [3, 2],
            [4, 2],
            [4, 3],
        ];
        const order = topologicalSort(jobs, deps);
        expect(isValidTopologicalOrder(order, jobs, deps)).toBeTruthy();
    });


    test('Test Case #3', () => {
        const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
        const deps: Dependency[] =  [
            [3, 1],
            [8, 1],
            [8, 7],
            [5, 7],
            [5, 2],
            [1, 4],
            [6, 7],
            [1, 2],
            [7, 6]
        ];
        const order = topologicalSort(jobs, deps);
        expect(isValidTopologicalOrder(order, jobs, deps)).toBeFalsy();
    });

    const isValidTopologicalOrder = (order: number[], jobs: number[], deps: Dependency[]): boolean => {
        const visited: { [key: string]: boolean } = {};
        for (const candidate of order) {
            for (const [preReq, job] of deps) {
                if (candidate === preReq && job in visited) return false;
            }
            visited[candidate] = true;
        }
        for (const job of jobs) {
            if (!(job in visited)) return false;
        }
        return order.length === jobs.length;
    }
});