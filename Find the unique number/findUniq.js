const numbers = [8, 1, 1, 2, 2, 3, 1, 2, 5, 3, 5];

const findUniq = (arr) => {
  arr.sort();
  return arr[0] === arr[1] ? arr.pop() : arr[0];
};

console.log(findUniq(numbers));
