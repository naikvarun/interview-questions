export const balancedBrackets = (string: string) : boolean => {
    const OPEN = ['(', '{', '['];
    const BRACKETS: {[key: string]: string} = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    const stack: string[] = [];

    for(let c of string) {
        if(BRACKETS.hasOwnProperty(c)) {
            if(BRACKETS[c] !== stack.pop()) {
                return false;
            }
        } else if( OPEN.indexOf(c) > -1) {
            stack.push(c);
        }
    }

    return stack.length === 0;
}