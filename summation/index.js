function summation(num) {
  const numbers = [];
  
  for (let index = 1; index <= num; index += 1) {
    numbers.push(index); 
  }
  
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  
  return sum;
}

console.log(summation(8));