import chalk from 'chalk';
import { Command } from 'commander';
import inquirer from 'inquirer';
import { CREATE_DEMO_APP, DEFAULT_APP_NAME } from '../consts.js';
import { availablePackages } from '../installers/index.js';
import { getVersion } from '../utils/getAppVersion.js';
import { logger } from '../utils/logger.js';

const defaultOptions = {
    appName: DEFAULT_APP_NAME,
    packages: ['tailwind', 'react-query', 'msw', 'example_to_remove'],
    flags: {
        noGit: false,
        noInstall: false,
        default: false,
    },
};

export const runCli = async () => {
    const cliResults = defaultOptions; // set default. overwrite from command line to interactive prompts

    // Build command line tool with props and options/flags.
    // if no arguments provided then the `enquirer` interactive prompt takes over and merges answers into cliResults variable
    // end goal to return an object with list of actions another process will handle (cliResults)

    const program = new Command().name(CREATE_DEMO_APP);

    program
        .description(
            'A CLI for creating a demo application with some random packages installed'
        )
        .argument(
            '[dir]',
            'The name of the application as well as the name of the directory to create'
        )
        .option(
            '--noGit',
            'Explicitly tell the CLI to NOT initialise a new git repo in the project',
            false
        )
        .option(
            '--noInstall',
            'Explicitly tell the CLI to NOT run the package managers install command',
            false
        )
        .option(
            '-y, --default',
            'Bypass the CLI and use all default options to bootstrap the new demo app',
            false
        )
        .version(getVersion(), '-v, --version', 'Display the version number')
        .addHelpText(
            'afterAll',
            `\n The awesome app stack was inspired by ${chalk
                .hex('#E8DCFF')
                .bold(
                    '@[insert]'
                )} and has been used to build awesome fullstack applications like ${chalk
                .hex('#E24A8D')
                .underline('https://somesite.com')} \n`
        )
        .parse(process.argv); //Running in background and if user types "index.js --help" then the above will appear to help them bypass interactive questions

    // Execution gets here after command line tool finished. if no cli args passed, it will not display anything.
    //if (process.env.npm_config_user_agent)
    if (process.versions.node.startsWith('16')) {
        logger.warn(
            '   WARNING: You are using Node.js version 16. This is not currently compatible with something we might use....so removing package from list'
        );

        // Remove a package from the list available, as that doesnt support node 16.  This is just an example.
        cliResults.packages = cliResults.packages.filter(
            (val) => val !== 'example_to_remove'
        );
    }

    // [dir] argument which is app name.
    const cliProvidedName = program.args[0];
    if (cliProvidedName) {
        cliResults.appName = cliProvidedName;
    }

    // Overwrite the cliResults flags (which were set as default) with any flags passed as args to the cli (from above results)
    cliResults.flags = program.opts();

    // Get the package manager of choice (npm, pnpm, yarn etc)
    const pkgManager = 'TODO';

    if (!cliResults.flags.default) {
        if (!cliProvidedName) {
            // If no appname passed on command line, prompt for one
            const { appName } = await inquirer.prompt({
                name: 'appName',
                type: 'input',
                message: 'What will your project be called?',
                default: defaultOptions.appName,
                //validate: validateAppName,
                transformer: (input) => {
                    return input.trim();
                },
            });
            cliResults.appName = appName; //override return results object with the user answer from interactive prompt
        }

        // Promot for language but always just use typescript ;)
        const { language } = await inquirer.prompt({
            name: 'language',
            type: 'list',
            message: 'Will you be using JavaScript or TypeScript?',
            choices: [
                {
                    name: 'TypeScript',
                    value: 'typescript',
                    short: 'TypeScript',
                },
                {
                    name: 'JavaScript',
                    value: 'javascript',
                    short: 'TypeScript',
                }, // Both options should have 'TypeScript' as the short value to improve UX and reduce confusion
            ],
            default: 'typescript',
        });

        const { packages } = await inquirer.prompt({
            name: 'packages',
            type: 'checkbox',
            message: 'Which packages would you like to enable?',
            choices: availablePackages
                .filter((pkg) => pkg !== 'envVariables') // dont prompt for env-vars
                .map((pkgName) => ({
                    name: pkgName,
                    checked: false,
                    // FIXME: TEMPORARY WARNING WHEN USING NODE 18. SEE ISSUE #59
                    disabled:
                        pkgName === 'example_to_remove' &&
                        process.versions.node.startsWith('16')
                            ? 'Node.js version 16 is currently not compatible with dummy'
                            : false,
                })),
        });

        cliResults.packages = packages;
    }

    console.log(cliResults); // index.js --noInstall my-sweet-demo-app
};
