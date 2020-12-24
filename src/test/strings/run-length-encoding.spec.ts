import {runLengthEncoding} from "../../app/strings/run-length-encoding";

describe('Run Length Encoding', () => {
   test('#1', () => {
       expect(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD')).toBe('9A4A2B4C2D');
   }) ;
});
