/* eslint-disable prefer-destructuring */
import colors from './colors';

// Responsive Breakpoints
const breakpoints = ['320px', '576px', '768px', '992px', '1200px'];

const fontSizes = [
  '0.625rem',
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.625rem',
  '1.875rem',
  '2.875rem',
  '3.375rem',
]

const fontWeights = [300, 400, 600, 800, 900];

const space = [
  '0rem', // 0
  '0.25rem', // 1
  '0.5rem', // 2
  '0.75rem', // 3
  '1rem', // 4
  '1.25rem', // 5
  '1.5rem', // 6
  '1.75rem', // 7
  '2rem', // 8
  '2.25rem', // 9
  '2.5rem', // 10
  '2.75rem', // 11
  '3rem', // 12
  '3.25rem', // 13
]

type baseThemeType = {
  space: string[];
  fontSizes: { [key: string]: string };
  fontWeights: { [key: string]: number };
  colors: typeof colors;
  breakpoints: { [key: string]: string };
};

const baseTheme: baseThemeType = {
  space,
  fontSizes: {},
  fontWeights: {},
  colors,
  breakpoints: {},
};

// Binding font sizes aliases
baseTheme.fontSizes.xxxxl = fontSizes[9]; // 54px
baseTheme.fontSizes.xxxl = fontSizes[8]; // 46px
baseTheme.fontSizes.xxl = fontSizes[7]; // 30px
baseTheme.fontSizes.xl = fontSizes[6]; // 26px
baseTheme.fontSizes.lg = fontSizes[5]; // 24px
baseTheme.fontSizes.md = fontSizes[4]; // 20px
baseTheme.fontSizes.rg = fontSizes[3]; // 16px
baseTheme.fontSizes.sm = fontSizes[2]; // 14px
baseTheme.fontSizes.xs = fontSizes[1]; // 12px
baseTheme.fontSizes.xxs = fontSizes[0]; // 10px

// Binding font weights aliases
baseTheme.fontWeights.black = fontWeights[4]; // 900
baseTheme.fontWeights.extra_bold = fontWeights[3]; // 800
baseTheme.fontWeights.semi_bold = fontWeights[2]; // 600
baseTheme.fontWeights.regular = fontWeights[1]; // 400
baseTheme.fontWeights.light = fontWeights[0]; // 300

// aliases
baseTheme.breakpoints.xs = breakpoints[0];
baseTheme.breakpoints.sm = breakpoints[1];
baseTheme.breakpoints.md = breakpoints[2];
baseTheme.breakpoints.lg = breakpoints[3];
baseTheme.breakpoints.xl = breakpoints[4];

export default Object.freeze({
  ...baseTheme,
});
