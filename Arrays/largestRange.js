let array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];

function largestRange(array) {
  let seenObject = {};
  let currentRangeDifference = 0;
  let range = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    seenObject[element] = true;
  }
  for (let j = 0; j < array.length; j++) {
    const num = array[j];
    if (seenObject[num]) {
      seenObject[num] = false;
      let leftExtremeRange = num;
      let decreasedNum = num - 1;

      while (seenObject[decreasedNum]) {
        leftExtremeRange = decreasedNum;
        seenObject[decreasedNum] = false;
        decreasedNum--;
      }

      let rightExtremeRange = num;
      let increasedNum = num + 1;
      while (seenObject[increasedNum]) {
        rightExtremeRange = increasedNum;
        seenObject[increasedNum] = false;
        increasedNum++;
      }
      if (rightExtremeRange - leftExtremeRange > currentRangeDifference) {
        currentRangeDifference = rightExtremeRange - leftExtremeRange;
        range = [leftExtremeRange, rightExtremeRange];
      }
    }
  }
  return range;
}

console.log(largestRange(array));
