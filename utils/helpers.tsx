// Checks if value is an empty object or collection. Does not support evaluating a Set or a Map (in that case, use lodash instead)
export const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

export const itemHasValueInKey = (item, value, key = 'id') => {
  return item ? item[key] === value : false;
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};
