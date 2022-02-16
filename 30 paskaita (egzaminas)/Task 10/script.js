/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */
import { composition} from './modules/composition.js'
import {division} from '.modules/division.js'
import {multiplication} from '.modules/multiplication.js'
import {substraction} from '.modules/substraction.js'

import {one, two, three, four, five} from './modules/numbers.js'

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
