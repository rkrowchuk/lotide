
const middle = function(array) {

  const middleIndex = Math.floor(array.length / 2);
  const middleNum = array[middleIndex];
  const nextNum = array[middleIndex - 1];
  
  let result = [];

  if (array.length > 2 && array.length % 2 !== 0) {
    result.push(middleNum);
  } else if (array.length > 2 && array.length % 2 === 0) {
    result.push(nextNum, middleNum);
  }
  return result;
};

module.exports = middle;




