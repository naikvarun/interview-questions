const SameBSTsCases = [
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 11],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 11, 94, 81],
        output: true
    },
    {"arrayOne": [1, 2, 3, 4, 5, 6, 7], "arrayTwo": [1, 2, 3, 4, 5, 6, 7], output: true},
    {"arrayOne": [7, 6, 5, 4, 3, 2, 1], "arrayTwo": [7, 6, 5, 4, 3, 2, 1], output: true},
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81],
        output: true
    },
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
        "arrayTwo": [11, 8, 5, 15, 2, 12, 94, 81],
        output: false
    },
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100],
        output: true
    },
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100],
        output: false
    },
    {
        "arrayOne": [5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34],
        "arrayTwo": [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8],
        output: false
    },
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34],
        "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100],
        output: false
    },
    {"arrayOne": [1, 2, 3, 4, 5, 6, 7, 8], "arrayTwo": [1, 2, 3, 4, 5, 6, 7], output: false},
    {"arrayOne": [7, 6, 5, 4, 3, 2, 1], "arrayTwo": [7, 6, 5, 4, 3, 2, 1, 0], output: false},
    {
        "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 10],
        "arrayTwo": [10, 8, 5, 15, 2, 10, 12, 94, 81],
        output: false
    },
    {
        "arrayOne": [50, 76, 81, 23, 23, 23, 100, 56, 12, -1, 3],
        "arrayTwo": [50, 23, 76, 23, 23, 12, 56, 81, -1, 3, 100],
        output: true
    }];

export const genTest = () => {
    SameBSTsCases.forEach((item, index) => {
        console.log(`test('#${index + 1}', () => {
       expect(sameBSTs([${item.arrayOne}], [${item.arrayTwo}])).toBe${item.output ? 'Truthy' : 'Falsy'}();
   }) ;`)
    });
};