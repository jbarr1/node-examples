// Looks down al lthe command files in the current direction and export them
// Means we can keep adding new individual commands files to this direction and they will be automatically picked up
// no need to modify a base blass or add an incldue statement for each new file

const normalizedPath = require('path').join(__dirname, './');

let importedCommands = require('fs')
    .readdirSync(normalizedPath)
    .filter((file) => file.match(/[a-zA-Z]+Command.js/))
    .map(function (file) {
        const c = require('./' + file);
        return new c();
    });

module.exports.commands = importedCommands;
