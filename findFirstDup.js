// Adding the function for finding the first number duplicate in array that return index and value
function findFirstDup(arr) {
    const seen = new Map();
    for(let i=0;i<arr.length;i++) {
        const num = arr[i];
        if(seen.has(num)) {
            return {index: i, value: num}
        }
        seen.set(num,i);
    }
    return { index: -1, value: null}
}


module.exports = findFirstDup;