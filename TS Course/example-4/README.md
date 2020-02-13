We want to use combine function with string and numbers.

> function combine(n1: number, n2: number) {
> const result = n1 + n2;
> return result;
> }

Utilizamos la union de tipos

> function combine(input1: number | string, input2: number | string, resultType: string) {

> // number + number = number
> const combineAges = combine(32, 60, 'as-number');
> console.log(combineAges);

> // string + string = number
> const combineStrAges = combine('32', '60', 'as-number');
> console.log(combineStrAges);

> // string + string = string
> const combineStr = combine('Donc', 'ojon', 'as-text');
> console.log(combineStr);

Utilizamos literales para definir que el valor de resultType solo puede ser 'as-nubmer' y 'as-text'

> function combine(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {

Evitamos errores

### Type Alias:

> type MyCombinable = number | string;
> type ResultType = 'as-number' | 'as-text';
> function combine(input1: MyCombinable, input2: MyCombinable, resultType: ResultType) {
