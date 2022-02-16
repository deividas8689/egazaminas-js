/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));

const substraction = new Function('a', 'b', 'return a - b');

console.log(substraction(10, 2));

const multiplication = new Function('a', 'b', 'a*b');

console.log(multiplication(2, 2));

const division = new Function('a', 'b', 'return a-b');

console.log(division(20, 2));