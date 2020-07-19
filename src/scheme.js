const merge = require('lodash.merge');
const chroma = require('chroma-js');
const transform = require('./transform');
const base = require('./base');
const exceptions = require('./exceptions');

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
  if (amplifier != 1) transform(draft, test, (_, v) => amplify(v, amplifier));

  // Apply color transformation.
  transform(draft, test, (k, v) => colorize(k, v, background, foreground));

  // Return the generated scheme.
  return draft;
};

/**
 * Defines a test for the transform functions.
 *
 * Any value that satisfies the test will be processed.
 *
 * @param {*} _ Discarded key.
 * @param {*} v Value.
 */
const test = (_, v) => typeof v === 'number';

/**
 * Modifies the transparency value by the given factor.
 *
 * @param {*} t Transparency value.
 * @param {*} a Amplifier value.
 */
const amplify = (t, a) => Math.min(Math.max(0, t * a), 1);

/**
 * Colorization transformation.
 *
 * Determinates the color generation strategy and applies it.
 *
 * @param {*} k Key.
 * @param {*} v Value.
 * @param {*} b Background color.
 * @param {*} f Foreground color.
 * @returns RRGGBBAA | RRGGBB color in the hex format.
 */
const colorize = (k, v, b, f) => colorant(k).call(this, b, f, v).hex();

/**
 * Determinates the color generation strategy by looking into exceptions list.
 *
 * @param {*} k Key of the property to be checked.
 */
const colorant = (k) => (exceptions.some((e) => e === k) ? RGBA : RGB);

/**
 * RRGGBBAA Color generation strategy.
 *
 * @param {*} _ Discarded background color.
 * @param {*} f Foreground color.
 * @param {*} v Transparency value.
 * @returns RRGGBBAA color.
 */
const RGBA = (_, f, v) => chroma(f).alpha(v);

/**
 * RRGGBB Color generation strategy.
 *
 * @param {*} b Background color.
 * @param {*} f Foreground color.
 * @param {*} v Blend value.
 * @returns RRGGBB color.
 */
const RGB = (b, f, v) => chroma.scale([b, f])(v);

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
