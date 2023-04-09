function productExceptSelf(nums: number[]): number[] {
  if (nums.length === 2) return nums.reverse();
  let total: number = 1;
  let result: number[] = [];
  let zeroCounter = 0;
  let zeroIndex = -1;
  let totalWithoutZero = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCounter++;
      zeroIndex = i;
    }
    total *= nums[i];
  }
  if (zeroCounter > 1) {
    result = new Array(nums.length).fill(0);
  } else if (zeroCounter === 1) {
    totalWithoutZero = [
      ...nums.slice(0, zeroIndex),
      ...nums.slice(zeroIndex + 1, nums.length),
    ].reduce((acc, curr) => acc * curr, 1);
    result = new Array(nums.length).fill(0);
    result[zeroIndex] = totalWithoutZero;
  } else {
    for (let j = 0; j < nums.length; j++) {
      let temp = total / (nums[j] || 0);
      result.push(temp);
    }
  }
  return result;
}
