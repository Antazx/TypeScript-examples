### Functions

> function add(n1: number, n2: number): number {

Sets return type of funcitons

### Define type function to avoid errors

> let combineValues;
> combineValues = (n1: number, n2: number) => { return n1 + n2; };
> combineValues = 5;
> console.log(combineValues(8, 8));

Error: Uncaught TypeError: combineValues is not a function at app.js:11
Solved with Function type:

> let combineValues: Function;
> combineValues = (n1: number, n2: number) => { return n1 + n2; };
> //combineValues = 5;
> console.log(combineValues(8, 8));

We can still have mistakes:

> let combineValues: Function;
> combineValues = () => { return 'Return String'; };
> //combineValues = 5;
> console.log(combineValues(8, 8));

We get undefined. We define combineValues as function with 2 params and number return

> let combineValues: (a: number, b: number) => number;

> function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
> const result = n1 + n2;
> cb(result);
> }
>
> addAndHandle(10, 39, (result) => { console.log(result); }); // 49
