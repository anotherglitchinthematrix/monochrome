const merge = require('lodash.merge');
const chroma = require('chroma-js');
const transform = require('./transform');
const base = require('./base');

/**
 * Generates a monochrome color scheme.
 *
 * @param background Background color of the theme.
 * @param foreground Foreground color of the theme.
 * @param override Overrides for default scheme values.
 * @param amplifier Overall transparency multiplier.
 * @return {*} Created color scheme.
 */
const scheme = ({ background, foreground, override, amplifier }) => {
  // Construct the base values.
  const draft = Object.assign(
    {
      background: background,
      foreground: foreground,
    },
    base()
  );

  // Merge with the generated warning scheme;
  merge(draft, warningScheme(background));

  // Apply overrides.
  if (override != null) merge(draft, override);

  // Amplify the transparency multipliers.
  if (amplifier != null && amplifier != 1) {
    transform(draft, (_, v) => amplify(v, amplifier));
  }

  // Apply transformation and return the generated scheme.
  return transform(draft, (_, v) => transformation(v, background, foreground));
};

/**
 * Modifies the transparency value by the given factor.
 */
const amplify = (value, amplifier) => {
  if (typeof value !== 'number') return;

  return Math.min(Math.max(0, value * amplifier), 1);
};

/**
 * Transforms transparency values into colors.
 */
const transformation = (value, background, foreground) => {
  if (typeof value !== 'number') return;

  return chroma.scale([background, foreground])(value).hex();
};

/**
 * Defines the warning colors.
 *
 * @param {*} background Background color.
 * @return {*} Warning theme data.
 */
const warningScheme = (background) => {
  // Calculate the error color.
  const error = chroma.scale([background, 'red']).mode('lab')(0.8).hex();

  // Calculate the warning color.
  const warning = chroma.scale([background, 'orange']).mode('lab')(0.8).hex();

  return {
    colors: {
      'listFilterWidget.noMatchesOutline': error,
      'list.errorForeground': error,
      'list.warningForeground': warning,
    },
  };
};

module.exports = scheme;
