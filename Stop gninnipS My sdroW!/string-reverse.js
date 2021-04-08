function spinWords(string) {
  let newString = string.split(" ");
  let result = "";

  newString.map((string, index) => {
    if (string.length > 4) {
      newString[index] = string.split("").reverse().join("");
    } else {
      newString[index] = string;
    }
    result = newString.join(" ");
  });
  return result;
}

console.log(spinWords("Hey fellow warriors"));
