function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      const current = array[i];
      const next = array[i + 1];
      if (next < current) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;

  }
  return array;
}
function swap(first, second, array) {
  let temp = array[second];
  array[second] = array[first];
  array[first] = temp;
}
