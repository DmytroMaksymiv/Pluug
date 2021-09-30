'use strict';

document.querySelector('h1').style.color ='red';

// infinite cycle

// let i = 0;
// while (true) {
//   console.log(i++);
// }

// UpperCase and LowerCase

// let str = 'Test'
// const str2 = str.split('').map(word=>word===word.toLowerCase() ? word.toUpperCase() : 
// word.toLowerCase()).join('')

// console.log(str2)





/// HW Lesson 3


const myObj = {};
const myObj2 = new Object();
////

const myObj3 = Object.create(null); 
console.log(myObj3)

////
const  myObj4 = {};

myObj4.name = 'Dmytro';
myObj4['age'] = 23;

console.log(myObj4)

///

const myArray1 = [];
const myArray2 = new Array();

/////

const myArray3 = new Array(100500);
console.log(myArray3.length)


////

const myArray4 = ['car', 'cat', 'flower', 'dog'];

//////


const myArray5 = new Array(5);

myArray5.fill('');

console.log(myArray5)

///

const myArray6 = [1, 2, 3, 4, 5];
const myArray16 = [12, 23, 44, 55];


let deleteElementByIndex = function (arr, i) {
    arr.splice(i, 1);
    return arr;
}


console.log(deleteElementByIndex(myArray6, 2))
console.log(deleteElementByIndex(myArray16, 3))


////////

const myArray7 = [];
const myArray17 = [3];

const isEmptyArray = function(arr) {
    return arr.length == 0;
}

console.log(`isEmptyArray ` + isEmptyArray(myArray7));
console.log(`isEmptyArray ` + isEmptyArray(myArray17));



//////

const myObj5 = {};
const myObj15 = {name: 'Vasa'};

const isObjEmpty = function(obj) {
    return Object.keys(obj).length == 0;
}

console.log(`isObjEmpty ` + isObjEmpty(myObj5));
console.log(`isObjEmpty ` + isObjEmpty(myObj15));



/////////

const myArray8 = [1, 2, 3, 4];
const myArray9 = [12, 13, 45];


const addArrays = function(arr, arr2) {
    return arr.concat(arr2);
}
console.log(addArrays(myArray8, myArray9));

////

const myArray10 = [1, 2, 3, 4, 5];

const powerThree = function(arr) {
    return arr.map(function(num) {
        return num ** 3;
})}

console.log(powerThree(myArray10))
console.log(powerThree(myArray9))

/////

//ще буду доробляти бо було дуже мало часу
// як можна з вами звязатися якщо б хотів щось попитати? 

// const myArray11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];



//////////
//буду доробляти

// const myArray12 = [5, 3.14, 4.1, 10, 11, 20.1]




///////

const  nothingTodo = function( ) {};