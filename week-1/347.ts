// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums: number[], k: number): number[] {
  if (nums.length === 1) return nums;
  let keyValue = {};
  let bucket: any[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (!keyValue[nums[i]]) {
      keyValue[nums[i]] = 0;
    }
    keyValue[nums[i]]++;
  }
  bucket = Object.entries(keyValue)
    .sort((a, b) => a[1] - b[1])
    .slice(-k)
    .map((item) => parseInt(item[0]));
  return bucket;
};
