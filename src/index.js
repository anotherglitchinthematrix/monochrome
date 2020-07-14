const fs = require('fs').promises;
const themes = require('./themes');

/**
 * Theme builder.
 *
 * Generates the given theme and puts it's content into the theme file.
 *
 * @param {*} t Generated theme data.
 */
const builder = (t) => fs.writeFile(file(t.name), JSON.stringify(t));

/**
 * Pipes the defined themes into builder.
 */
const build = () => Promise.all(themes.map(builder));

/**
 * Error handler.
 */
const error = () => process.exit(1);

/**
 * File name utility.
 *
 * @param {*} n File name.
 */
const file = (n) => `./theme/${n}.json`;

// Create the output folder and build the defined themes.
fs.mkdir('./theme', { recursive: true }).then(build).catch(error);
