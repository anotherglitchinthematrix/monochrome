const theme = require('./theme');

// Pre-defined monochrome themes.
const themes = [
  theme({
    name: 'monochrome-dark',
    background: '#101010',
    foreground: '#EBEBEB',
  }),
  theme({
    name: 'monochrome-light',
    background: '#EBEBEB',
    foreground: '#101010',
  }),
];

module.exports = themes;
