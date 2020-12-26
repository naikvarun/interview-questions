export enum Direction {
    East = 'EAST',
    West = 'WEST',
}

export const sunsetViews = (buildings: number[], direction: Direction): number[] => {
    let index = direction === Direction.West ? 0 : buildings.length - 1;
    const step = direction === Direction.West ? 1 : -1;

    const stack: number[] = [];
    let currentMaxHeight = -1;
    while (index >= 0 && index < buildings.length) {
        const buildingHeight = buildings[index];
        if (buildingHeight > currentMaxHeight) {
            stack.push(index);
            currentMaxHeight = buildingHeight;
        }
        index += step;
    }

    return direction === Direction.West ? stack : stack.reverse();
}
