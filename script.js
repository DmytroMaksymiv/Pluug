'use strict';

document.querySelector('h1').style.color = 'red';

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

/////////// HW Lesson 3 //////////////////

///// 1
const myObj = {};
const myObj2 = new Object();

//// 2
const myObj3 = Object.create(null);
console.log(myObj3);

//// 3
const myObj4 = {};

myObj4.name = 'Dmytro';
myObj4['age'] = 23;

console.log(myObj4);

/// 4
const myArray1 = [];
const myArray2 = new Array();

///// 5
const myArray3 = new Array(100500);
console.log(myArray3.length);

//// 6
const myArray4 = ['car', 'cat', 'flower', 'dog'];

////// 7
const myArray5 = new Array(5);

myArray5.fill('');

console.log(myArray5);

/// 8

const myArray6 = [1, 2, 3, 4, 5];
const myArray16 = [12, 23, 44, 55];

let deleteElementByIndex = function (arr, i) {
    arr.splice(i, 1);
    return arr;
};

console.log(deleteElementByIndex(myArray6, 2));
console.log(deleteElementByIndex(myArray16, 3));

//////// 9

const myArray7 = [];
const myArray17 = [3];

const isEmptyArray = function (arr) {
    return arr.length == 0;
};

console.log(`isEmptyArray ` + isEmptyArray(myArray7));
console.log(`isEmptyArray ` + isEmptyArray(myArray17));

////// 10

const myObj5 = {};
const myObj15 = { name: 'Vasa' };

const isObjEmpty = function (obj) {
    return Object.keys(obj).length == 0;
};

console.log(`isObjEmpty ` + isObjEmpty(myObj5));
console.log(`isObjEmpty ` + isObjEmpty(myObj15));

///////// 11

const myArray8 = [1, 2, 3, 4];
const myArray9 = [12, 13, 45];

const addArrays = function (arr, arr2) {
    return arr.concat(arr2);
};
console.log(addArrays(myArray8, myArray9));

//// 12

const myArray10 = [1, 2, 3, 4, 5];

const powerThree = function (arr) {
    return arr.map(function (num) {
        return num ** 3;
    });
};

console.log(powerThree(myArray10));
console.log(powerThree(myArray9));

///// 13

const myArray11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddElements(num) {
    const ar = [];
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            ar.push(num[i]);
        }
    }
    return ar;
}

console.log(oddElements(myArray11));

////////// 14

const myArray12 = [-12, 5, 3.14, 4.1, 10, -43, 11, 20.1, 16, 44, 31.2];

function integerArray(arr) {
    return arr.filter((num) => {
        if (Number.isInteger(num)) {
            // or Number.isInteger(num) & num > 0
            return num;
        }
    });
}

console.log(integerArray(myArray12));
console.log(integerArray(myArray10));

/// 15
const nothingTodo = function () {};
