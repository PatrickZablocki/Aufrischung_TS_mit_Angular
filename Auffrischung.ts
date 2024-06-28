let mutableVariable: number = 10;
const immutableVariable: string = "Hello";
// var veraltet, vermeiden, nutzt man nicht mehr sowie bei JavaScript
var oldStyleVariable: boolean = true;

// Number

let integer: number = 42;
let float: number = 3.14;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

// String

let singleQuote: string = 'Hello, TypeScript';
let doubleQuote: string = "Hello, TypeScript";
let templateLiteral: string = `Hello, TypeScript`;
let interpolation: string = `The number is ${integer}`;

// Boolean

let isDone: boolean = false;

// Arrays

let list: number[] = [1, 2, 3, 4, 5];
let anotherList: Array<number> = [1, 2, 3, 4, 5];

// Tuples
// Tuples ermöglicht es mir, ein Array mit einer festen Anzahl und bekannten Typen zu definieren.

let tuple: [string, number];
tuple = ["hello", 10]; // OK
// tuple = [10, "hello"]; // Error

// Void
// void wird häufig als Rückgabetyp für Funktionen verwendet, die keinen Wert zurückgeben.

function warnUser(): void {
    console.log("This is my warning message");
}
