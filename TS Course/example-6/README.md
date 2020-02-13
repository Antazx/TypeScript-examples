### Unknown type

Se diferencia de any en que un tipo unknown no se puede asignar a una variable tipada.
Solo permite la asignación si se hace una comprobación previa.

> let userInput: unknown;
> let userName: string;
>
> if (typeof userInput === 'string')
> userName = userInput;

Lanzar error con:

> throw { message: message, errorCode: code };

Typo never:

> function generateError(message: string, code: number): never {
> throw { message: message, errorCode: code };
> }
