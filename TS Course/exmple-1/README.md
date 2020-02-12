Problem: input.value is always string, we are not adding num1 to num2.
Solution:

> if (typeof num1 === 'number' && typeof num2 === 'number') {
> return num1 + num2;
> } else {
> return +num1 + +num2;
> }

.. a bit of tirria.
