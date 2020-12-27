export function shortenPath(path: string): string {
    const PARENT = '..';
    const CURRENT = '.';
    const ROOT = '';
    const isEmpty = (stack: string[]): boolean => stack.length === 0;
    const isParentAtTop = (stack: string[]): boolean => stack[stack.length - 1] === PARENT;
    const isAtRoot = (stack: string[]): boolean => stack.length === 1 && stack[0] === ROOT;
    const dirStack: string[] = [];
    if (path.startsWith('/')) {
        dirStack.push(ROOT);
        path = path.substring(1);
    }

    for (const dir of path.split('/').filter((item) => item !== '' && item !== CURRENT)) {
        if (dir === PARENT) {
            if (isEmpty(dirStack) || isParentAtTop(dirStack)) {
                dirStack.push(dir);
            } else if (!isAtRoot(dirStack)) {
                dirStack.pop();
            }
        } else {
            dirStack.push(dir);
        }
    }

    return isAtRoot(dirStack) ? "/" : dirStack.join('/')
}