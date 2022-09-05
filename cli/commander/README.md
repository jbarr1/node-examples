# What is Commander?

The complete solution for node.js command-line interfaces.

## Where can I find it?

https://www.npmjs.com/package/commander

## Where can I find examples using it?

https://github.com/tj/commander.js/tree/master/examples

## What is this repo about then?

https://blog.bitsrc.io/writing-an-extensible-cli-tool-in-2022-with-node-js-43eb03150be2

Just playground code, trying out some of the above examples to get familiar with it.

Uses the `command pattern` to build a collection of classes (commands), that will be executed by `commander`
Each command class will inherit from base class, adding an "action" method, that is used by the `commander`.

console.log the output of the command chosen by the user

### Usage

| Command        | Help
| ------------- |-------------|
| node string-utils.js -V      | Gets version of main string-utils.js program|
| node string-utils.js -h | Shows which commands can be run in the main program.|
| node string-utils.js split -h | Shows help arguments etc, for the specific command `split` |
| node string-utils.js help split| Shows help arguments etc, for the specific command `split` |
| node string-utils.js upper sometext | Returns `SOMETEXT`

