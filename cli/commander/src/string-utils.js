// Main program that defines a collection of commands and adds them to main program
// Look at the "single-example" for details on how a single command should be defined

const { Command } = require('commander');
const { commands } = require('./commands');

const program = new Command();

// Give program some meta details
program
    .name('string-utils')
    .description('CLI with simple string manipulation commands')
    .version('0.0.1');

// Loop over each class and add it (the command) to main program
commands.forEach((c) => {
    //get the definition of our command
    const commandDef = c.definition();

    //we then use it to build the command we're going to be executing later.
    const subCommand = program
        .command(commandDef.command)
        .description(commandDef.help);

    commandDef.arguments.forEach((arg) => {
        subCommand.argument(arg[0], arg[1]);
    });

    commandDef.options.forEach((o) => {
        subCommand.option([o[0], o[1]].join(','), o[2], o[3]);
    });

    subCommand.action(function () {
        c.action.apply(c, arguments);
        console.log(c.getResult());
    });
});

//parse the input and decide which command we're trying to execute.
program.parse();

// Try the following:
//    node string-util
//    node string-util help split
//    node string-util split --separator "," a,b,c
//    node string-util split --first a,b,c
//    node string-util join a b c d
