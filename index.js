const defaultCmp = (a, b) => a === b;

module.exports = (array, equal = defaultCmp) => {
  return array.filter(function(el, i, arr) {
    return arr.findIndex(find => equal(find, el)) === i;
  });
};
