// checks arrays have same elements, regardless of order
const arraysAreEqual = (array1, array2) => {
  if (array1.length === array2.length) {
    return array1.every((element) => {
      if (array2.includes(element)) {
        return true;
      }
      return false;
    });
  }
  return false;
};

const arrayContains = (array, values) => {
  if (!array || !values) return false;
  if (!Array.isArray(array) || Array.isArray(values)) return false;
  return array.some((item) => values.includes(item));
};

module.exports = {
  arraysAreEqual,
  arrayContains,
};
