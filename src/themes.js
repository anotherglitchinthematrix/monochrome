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
  theme({
    name: 'monochrome-dark-subtle',
    background: '#0A1219',
    foreground: '#F1F5F9',
  }),
  theme({
    name: 'monochrome-light-subtle',
    background: '#F1F5F9',
    foreground: '#0A1219',
  }),
  theme({
    name: 'monochrome-dark-amplified',
    background: '#000000',
    foreground: '#FFFFFF',
  }),
  theme({
    name: 'monochrome-light-amplified',
    background: '#FFFFFF',
    foreground: '#000000',
  }),
  theme({
    name: 'monochrome-dark-cool-gray',
    background: '#111827',
    foreground: '#F9FAFB',
  }),
  theme({
    name: 'monochrome-light-cool-gray',
    background: '#F9FAFB',
    foreground: '#111827',
  }),
];

module.exports = themes;
