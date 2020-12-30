const getSmaller = (arr: number[]): number[] => {
    return arr.filter(((value, index) => value < arr[0] && index > 0));
}

const getEqualOrBigger = (arr: number[]): number[] => {
    return arr.filter(((value, index) => value >= arr[0] && index > 0));
}

export const sameBSTs = (arrayOne: number[], arrayTwo: number[]): boolean => {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    if (arrayOne.length === 0) {
        return true;
    }
    if (arrayOne[0] !== arrayTwo[0]) {
        return false;
    }

    return sameBSTs(getSmaller(arrayOne), getSmaller(arrayTwo)) && sameBSTs(getEqualOrBigger(arrayOne), getEqualOrBigger(arrayTwo));
}

