/**
 * Reference program adding types to javascript
 * Uncomment lines of code to execute example
 */

// Type Annotations
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

// Inferred Types

// Union Types

// Objects and Interfaces

// Optional Properties

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
