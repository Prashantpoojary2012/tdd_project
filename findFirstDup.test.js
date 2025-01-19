const findFirstDup = require('./findFirstDup');

describe('findFirstDup',() =>{
    it('should return the index and value of the first duplicate in an array',() =>{
        const input = [1,2,3,4,5,2,7,9,3,0,1];
        const result = findFirstDup(input);
        expect(result).toEqual({index: 5, value: 2});
    })
});