function add(n1: number, n2: number, show: boolean, phrase: string) {
    const result = n1 + n2;
    if (show) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);