type Dependency = [number, number];

export function topologicalSort(jobs: number[], deps: Dependency[]) {

    const graph: { [key: string]: number[] } = {};

    for (const [preReq, job] of deps) {
        if (!graph.hasOwnProperty(job)) {
            graph[job] = [];
        }
        graph[job].push(preReq);
    }
    const sorted: number[] = [];
    const queue: number[] = jobs.filter(value => !graph.hasOwnProperty(value));
    while (queue.length !== 0) {
        const currentJob = queue.shift();
        sorted.push(currentJob!);
        for (const [job, preReqs] of Object.entries(graph)) {
            if (preReqs.includes(currentJob!)) {
                graph[job] = preReqs.filter(item => item !== currentJob);
                if (graph[job].length == 0) {
                    queue.push(+job);
                }
            }
        }
    }

    for (const [_, preReqs]of Object.entries(graph)) {
        if(preReqs.length !== 0 ) {
            return [];
        }
    }

    return sorted;
}
