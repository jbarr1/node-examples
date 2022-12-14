const { Command } = require('./Command');

class Upper extends Command {
    constructor() {
        super('upper', 'Turns a string to all uppercase ', [
            ['<string>', 'The string to turn uppercase'],
        ]);
    }

    action(str, options) {
        this.result = str.toUpperCase();
    }
}

module.exports = Upper;
