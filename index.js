function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;
  if (fromN <= toN){
    result = fromN + sum(fromN+1, toN);
  }
  return result;
}

module.exports = sum;
