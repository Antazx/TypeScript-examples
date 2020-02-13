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

Valores globales que sean legibles
En vez de:

> role: 0

Usamos:

> enum Role { ADMIN, READONLY, AUTHOR };
> role: Role.ADMIN
> if (person.role === Role.ADMIN) {
> ... admin things ..;
> }

En este ejemplo ADMIN = 1, READONLY = 2 ...
Evitando:

> role: 'ADMIN'
> ...
> if (person.role === 'ADMIN') {
> ... admin things ..;
> }

Se puede:

> enum Role { ADMIN = 'admin', READONLY = 7, AUTHOR };

Para definir los valores de cada etiqueta
