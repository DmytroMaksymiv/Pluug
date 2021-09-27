'use strict';

document.querySelector('h1').style.color = 'red';

// infinite cycle

// let i = 0;
// while (true) {
//   console.log(i++);
// }

// UpperCase and LowerCase

let str = 'Test';
const str2 = str
  .split('')
  .map(word =>
    word === word.toLowerCase() ? word.toUpperCase() : word.toLowerCase()
  )
  .join('');

console.log(str2);

/*     
    Завдання 1 зроблено добре. Браузер зависає.

    Завдання 2 зроблено добре. 
*/
