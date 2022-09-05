#! /usr/bin/env node
import { runCli } from './cli/index.js';
import { renderTitle } from './utils/renderTitle.js';
const main = async () => {
    renderTitle();

    await runCli();
};

main().catch((err) => {
    // log out the error
    console.log('Ooops error: ', err);
    process.exit(1);
});
