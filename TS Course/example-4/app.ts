type MyCombinable = number | string;
type ResultType = 'as-number' | 'as-text';

function combine(input1: MyCombinable, input2: MyCombinable, resultType: ResultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultType === 'as-number') {
    //     return parseFloat(result);
    //     //return +result;
    // } else {
    //     return result.toString();
    // }
}

// number + number = number
const combineAges = combine(32, 60, 'as-number');
console.log(combineAges);

// string + string = number
const combineStrAges = combine('32', '60', 'as-number');
console.log(combineStrAges);

// string + string = string
const combineStr = combine('Donc', 'ojon', 'as-text');
console.log(combineStr);