const scheme = require('./scheme');
const chroma = require('chroma-js');

/**
 * Generates a monochrome theme.
 *
 * @param background Background color of the theme.
 * @param foreground Foreground color of the theme.
 * @param override Overrides for default scheme values.
 * @param amplifier Overall transparency multiplier.
 * @return {*} Created theme.
 */
const theme = ({ name, background, foreground, override, amplifier }) => {
  return Object.assign(
    { name: name, type: type(background) },
    scheme({
      background: background,
      foreground: foreground,
      override: override,
      amplifier: amplifier,
    })
  );
};

/**
 * Determinates the type of the theme according to background color.
 *
 * @param {*} color background color.
 */
const type = (color) => (chroma(color).luminance() > 0.5 ? 'light' : 'dark');

module.exports = theme;
