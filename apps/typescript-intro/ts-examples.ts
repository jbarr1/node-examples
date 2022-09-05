/**
 * Reference program adding types to javascript
 * Uncomment lines of code to execute example
 */

// * Type Annotations

let myName = 'John';
//let myName2: string = 42; // Shows error in VScode as built in syntax checker
let isAwesome: boolean = true;
let age: number = 21;

function add(a, b) {
    return a + b;
}

function add2(a: number, b: number) {
    return a + b;
}
console.log(add(5, 10));
// console.log(add2(5, "10")); Shows error in VScode as expects number

// * Inferred Types

// You dont need to define variable type as its inferred from its assignment
let myName3 = 'john';
let result = 'string';
//myName3 = 2; // error as its already given it a type string
// result = add2(3,4) // error as function inferred a return type from its parameter types

const numbers = [4, 5, 6, 7];
const numbers2: number[] = [4, 5, 6, 7]; // dont need this as its inferred
//numbers.push("john")

// * Union Types

const numnbersAndStrings: (string | number)[] = ['john', 1, 2, 'fred']; // Defining array as numbers and strings
let theResult: string | number = 42; // Assign it as a number
theResult = '42'; // it can later be assigned a string, as its allowed to be either type

// * Objects and Interfaces

// * Optional Properties

// * Classes

// * Generics

// * any, unknown, never

// * Type Assertions

// * @ts-ignore / @ts-nocheck
