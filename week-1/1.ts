// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  let numberSet = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededNumber = target - currentNumber;
    const neededNumberIndex = numberSet.get(neededNumber);
    if (neededNumberIndex != null) {
      return [neededNumberIndex, i];
    } else {
      numberSet.set(currentNumber, i);
    }
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4, 1], 5));
