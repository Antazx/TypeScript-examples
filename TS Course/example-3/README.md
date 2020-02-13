### Problem

> const person: object = {
> const person: {} = {
> name: 'Guillermo',
> age: 25
> };
>
> console.log(person.name); //Error

Hay error porque :object ({} es lo mismo que object) no da toda la información sobre la estructura del objeto.

### Tuplas

> role: [number, string];
> role = [1, 'author']

Array de longitud = 2, role: (string | number)[]

### Enumeraciones

Valores que sean legibles
En vez de:

> role: 0

Usamos:

Evitando

> role: 'ADMIN'
> ...
> if (person.role === 'ADMIN') {
> ... admin things ..;
> }
