export const colorsGreen = [
  '#A7EABB',
  '#9CE4B9',
  '#92DDB7',
  '#88D7B5',
  '#7ED0B3',
  '#75C9B0',
  '#6CC2AE',
  '#63BBAB',
  '#5BB4A8',
  '#53AEA6',
  '#4CA7A2',
  '#45A09F',
  '#3E999C',
  '#389298',
  '#328B94',
  '#2D8490',
  '#297E8B',
  '#257787',
  '#227082',
];

const originalColors = Object.freeze({
  white: '#FFFFFF',
  almostWhite: '#f3f6f3',
  lightGrey: '#DDDDDD',
  middleGrey: '#AFAFAF',
  darkGrey: '#777777',
  slateGrey: '#545a62',
  dark: '#2A2733',
  black: '#000000',
  ice: '#f0fff7',
  lightMint: '#C6FFD4',
  mintyGreen: '#15fa84',
  darkGreen: '#33D692',
  cerulean: '#0081dc',
  sunflowerYellow: '#ffce00',
  veryLightPink: '#FFE6E6',
  tomato: '#E6231B',
  sand: '#EBC299',
  colorsGreenGra: colorsGreen,
  blueFacebook: '#4367b4',
  secondaryBlue: '#0341ef',
  altBrown: '#818981',
});


// Colors used in sequential vizualization
const sequential = Object.freeze({
  dv_00: '#46faab',
  dv_10: '#41edb0',
  dv_20: '#3ddfb4',
  dv_30: '#38d2b6',
  dv_40: '#34c4b6',
  dv_50: '#30b7b5',
  dv_60: '#2ca0a9',
  dv_70: '#28899b',
  dv_80: '#24748d',
  dv_90: '#20607f',
});

// Colors used in categorial combos vizualization
const categorial = Object.freeze({
  com_00: '#000f7d',
  com_10: '#002dd4',
  com_20: '#418de6',
  com_30: '#79bfe3',
  com_40: '#abdee6',
  com_50: '#e1e8e6',
  com_60: '#f4ffef',
  com_70: '#91ff9a',
  com_80: '#00cf6a',
  com_90: '#af11bd',
  com_100: '#ff3c5f',
  com_110: '#ff849a',
  com_120: '#ffb8b8',
  com_130: '#ffd894',
  com_140: '#ffab40',
  com_150: '#ff7b01',
});

// Colors used in qualitative vizualization
const qualitative = Object.freeze({
  qal_00: '#000f7d',
  qal_10: '#002dd4',
  qal_20: '#91ff9a',
  qal_30: '#ffd894',
  qal_40: '#ff849a',
  qal_50: '#ff3c5f',
  qal_60: '#af11bd',
  qal_70: '#601edf',
});

// Colors shared in both dark & light themes
const shared = Object.freeze({
  p_70: '#01c666',
  n_10: '#ffffff',
  n_20: '#f3f6f3',
  n_30: '#dbe2db',
  n_40: '#bfc7bf',
  n_50: '#818981',
  n_60: '#505550',
  n_70: '#3f443f',
  n_80: '#313431',
  n_90: '#222522',
  n_100: ' #161716',
});

// Colors used in light theme
const light = Object.freeze({
  ...shared,
  p_10: '#f4ffef',
  p_20: '#c6ffbe',
  p_30: '#91ff9a',
  p_40: '#56ff86',
  p_50: '#15fa84',
  s_10: '#d7efed',
  s_20: '#abdee6',
  s_30: '#79bfe3',
  s_40: '#418de6',
  s_50: '#0341ef',
  info: '#418de6',
  info_alt: '#e9fdfd',
  success: '#01c666',
  success_alt: '#c6ffbe',
  warning: '#ff7b01',
  warning_alt: '#ffe2b0',
  alert: '#ff3c5f',
  alert_alt: '#ffd2d2',
});

// Colors used in dark theme
// const dark = Object.freeze({
//   ...shared,
//   p_10: '#000d06',
//   p_20: '#003d1f',
//   p_30: '#006e38',
//   p_40: '#009e51',
//   p_50: '#01e073',
//   s_10: '#000126',
//   s_20: '#000752',
//   s_30: '#000f7d',
//   s_40: '#001ca8',
//   s_50: '#002dd4',
//   info: '#289ed8',
//   info_alt: '#d7efed',
//   success: '#00c364',
//   success_alt: '#c6ffbe',
//   warning: '#f38800',
//   warning_alt: '#ffe3b0',
//   alert: '#ff254c',
//   alert_alt: '#ffd0d0',
// });

// const activeTheme = window.localStorage.getItem('theme') || 'light';
// export const activeColors = activeTheme === 'light' ? light : dark;

export default Object.freeze({
  ...originalColors,
  // new colors
  sequential,
  categorial,
  qualitative,
  ...light,
});
