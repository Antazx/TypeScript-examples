function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Restult: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 24));

let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 39, (result) => { console.log(result); });