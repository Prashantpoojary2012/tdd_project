const findFirstDup = require('./findFirstDup');

describe('findFirstDup',() =>{
    it('should return the index and value of the first duplicate in an array',() =>{
        const input = [1,2,3,4,5,2,7,9,3,0,1];
        const result = findFirstDup(input);
        expect(result).toEqual({index: 5, value: 2});
    });
    it('should return -1 and null if there are no duplicate',()=>{
        const input=[1,2,3,4,5];
        const result = findFirstDup(input);
        expect(result).toEqual({index: -1, value: null});
    });
    it('should handle an empty array',()=>{
        const input=[];
        const result = findFirstDup(input);
        expect(result).toEqual({index: -1, value: null});
    });
    it('should handle an array with one element',()=>{
        const input=[1];
        const result = findFirstDup(input);
        expect(result).toEqual({index: -1, value: null});
    });
    it('should handle an array where the first duplicate occurs',()=>{
        const input=[2,2,3,4,5];
        const result = findFirstDup(input);
        expect(result).toEqual({index: 1, value: 2});
    })
});