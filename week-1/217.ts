// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  if (nums.length === 0 || nums.length === 1) return false;
  let obj = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (obj.has(nums[i])) {
      return true;
    } else {
      obj.set(nums[i], 1);
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5]));
