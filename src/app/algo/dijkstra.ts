export const dijkstrasAlgorithm = (start: number, edges: number[][][]): number[] => {
    const distances: { dist: number, visited: boolean }[] = [];

    edges.forEach((value, index) => {
        distances[index] = {dist: Infinity, visited: false};
    });
    distances[start].dist = 0;

    const getNodeWithMinDist = (dist: { dist: number, visited: boolean } []): number => {
        let minIndex = -1;
        let minDist = Infinity
        dist.forEach(((value, index) => {
            if (!value.visited && value.dist < minDist) {
                minDist = value.dist;
                minIndex = index;
            }
        }));
        return minIndex;
    }

    let currentIndex = getNodeWithMinDist(distances);
    while (currentIndex !== -1) {
        distances[currentIndex].visited = true;
        const neighbours: number[][] = edges[currentIndex];
        neighbours.forEach(((value) => {
            const [next, dist] = value;
            const updatedDist = distances[currentIndex].dist + dist;
            if (updatedDist < distances[next].dist) {
                distances[next].dist = updatedDist;
            }
        }));
        currentIndex = getNodeWithMinDist(distances);
    }
    return distances.map(value => value.dist === Infinity ? -1 : value.dist);
}

