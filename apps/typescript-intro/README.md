# Introduction to Typescript

Example project to add `Typescript` to a `node.js` project

## Typescript

Reference URL: https://www.typescriptlang.org

> TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

- TypeScript is a static type checker
- Detects errors in code without running it
- TypeScript does NOT effect the runtime behavior of JavaScript
- To run TypeScript code, we have to convert it to JavaScript FIRST
- The TypeScript to JavaScript compilation process removes all type information
- TypeScript doesn’t provide any additional runtime libraries. There’s no additional TypeScript-specific framework to learn.

## Setup New Project

Create a new node project  
`npm init -y`

Install `typescript` as a developer dependency  
`npm install -D typescript`

Create empty `tsconfig.json` file in root just containing {} to update during project 
`touch tsconfig.json`

Install `nodemon` and `ts-node` as more dev dependecy  
`npm install -D nodemon ts-node`  

Add scripts to `package.json` to compile ts down to js  
build, dev, start

Create a `.gitignore` file for a node project  
`npx gitignore node`

Ready to start....

## Commands 

Manually compile `typescript` down to `javascript`  
`npx tsc ts-examples.ts`

Setup `tsconfig.json`  
Loads of config options. See `tsc --help`  
- Add module

## References

https://www.youtube.com/watch?v=2ArU2F92rds&t=30s




## Examples & Boilerplates

File `example.ts` in this repo, is a simple reference program showing how to add various syntax on top of javascript

**Typescript with Express**
- `npx create-express-api --typescript --directory my-ts-api`

