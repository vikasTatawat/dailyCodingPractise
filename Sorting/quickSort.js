let array = [8, 5, 2, 9, 5, 6, 3];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array[array.length - 1];
  for (let index = 0; index < array.length -1; index++) {
    const element = array[index];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));
