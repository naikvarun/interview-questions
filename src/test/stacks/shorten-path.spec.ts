import {shortenPath} from "../../app/stacks/shorten-path";


describe('Shorten Path', () => {
    test('Test Case #1', () => {
        expect(shortenPath('./..')).toBe('..');
    });
    test('Test Case #2', () => {
        expect(shortenPath('/')).toBe('/');
    });
    test('Test Case #3', () => {
        expect(shortenPath('foo/../..')).toBe('..');
    });
    test('Test Case #4', () => {
        expect(shortenPath('./foo/bar')).toBe('foo/bar');
    });
    test('Test Case #5', () => {
        expect(shortenPath('foo/bar/..')).toBe('foo');
    });
    test('Test Case #6', () => {
        expect(shortenPath('/../../../this////one/./../../is/../../going/../../to/be/./././../../../just/a/forward/slash/../../../../../../foo')).toBe('/foo');
    });
    test('Test Case #7', () => {
        expect(shortenPath('../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../../foo')).toBe('../../../../../../../../foo');
    });
    test('Test Case #8', () => {
        expect(shortenPath('/../../../this////one/./../../is/../../going/../../to/be/./././../../../just/a/forward/slash/../../../../../..')).toBe('/');
    });
    test('Test Case #9', () => {
        expect(shortenPath('../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../..')).toBe('../../../../../../../..');
    });
    test('Test Case #10', () => {
        expect(shortenPath('/foo/./././bar/./baz///////////test/../../../kappa')).toBe('/foo/kappa');
    });
    test('Test Case #11', () => {
        expect(shortenPath('../../foo/../../bar/baz')).toBe('../../../bar/baz');
    });
    test('Test Case #12', () => {
        expect(shortenPath('/../../foo/../../bar/baz')).toBe('/bar/baz');
    });
    test('Test Case #13', () => {
        expect(shortenPath('../../foo/bar/baz')).toBe('../../foo/bar/baz');
    });
    test('Test Case #14', () => {
        expect(shortenPath('/../../foo/bar/baz')).toBe('/foo/bar/baz');
    });
    test('Test Case #15', () => {
        expect(shortenPath('foo/bar/baz')).toBe('foo/bar/baz');
    });
    test('Test Case #16', () => {
        expect(shortenPath('/foo/bar/baz')).toBe('/foo/bar/baz');
    });
});

/*
const cases: { path: string, output: string }[] = [
    {path: './..', output: '..'},
    {path: '/', output: '/'},
    {path: "foo/../..", output: '..'},
    {path: "./foo/bar", output: "foo/bar"},
    {path: "foo/bar/..", output: "foo"},
    {
        path: '/../../../this////one/./../../is/../../going/../../to/be/./././../../../just/a/forward/slash/../../../../../../foo',
        output: "/foo"
    },
    {
        path: "../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../../foo",
        output: "../../../../../../../../foo"
    },
    {
        path: "/../../../this////one/./../../is/../../going/../../to/be/./././../../../just/a/forward/slash/../../../../../..",
        output: "/"
    },
    {
        path: "../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../..",
        output: "../../../../../../../.."
    },
    {
        path: "/foo/./././bar/./baz///////////test/../../../kappa",
        output: "/foo/kappa"
    },
    {
        path: "../../foo/../../bar/baz",
        output: "../../../bar/baz"
    }, {path: "/../../foo/../../bar/baz", output: "/bar/baz"}, {path: "../../foo/bar/baz", output: "../../foo/bar/baz"},
    {path: "/../../foo/bar/baz", output: "/foo/bar/baz"},
    {path: "foo/bar/baz", output: "foo/bar/baz"}, {
        path: "/foo/bar/baz", output: "/foo/bar/baz"
    }

];
cases.forEach((item, index) => {
    console.log(`test('Test Case #${index+1}',  () => {
        expect(shortenPath('${item.path}')).toBe('${item.output}');
    });`)
});
 */