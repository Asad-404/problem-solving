// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  if (nums.length === 0 || nums.length === 1) return false;
  let obj = {};
  for (let i = 0; i <= nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return false;
}
