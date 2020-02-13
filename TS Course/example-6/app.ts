let userInput: unknown;
let userName: string;

userInput = 7;
userInput = 'String';

if (typeof userInput === 'string')
    userName = userInput;

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

const log = generateError('Ups!', 400);
console.log(log); // Dont pritn anything, never type