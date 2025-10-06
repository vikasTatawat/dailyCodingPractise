function longestSubarrayWithSum(arr, target) {
  let left = 0,
    right = 0,
    sum = 0,
    maxlength = 0;
  while (right < arr.length) {
    sum += arr[right];

    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    if (sum == target) {
      maxlength = Math.max(maxlength, right - left + 1);
    }
    right++;
  }
  return maxlength;
}

console.log(longestSubarrayWithSum([1, 2, 3, 7, 5], 12));
