function positiveSum(arr) {
  const positiveNumbers = arr.filter((number) => number > 0);
  const initialValue = 0;
  const result = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

  return result;
};

const arrayTest = [1,-4,7,12];

console.log(positiveSum(arrayTest));