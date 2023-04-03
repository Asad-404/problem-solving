// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i <= s.length; i++) {
    if (obj1.hasOwnProperty(s.charAt(i))) {
      obj1[s.charAt(i)] += 1;
    } else {
      obj1[s.charAt(i)] = 1;
    }
  }
  for (let j = 0; j <= t.length; j++) {
    if (obj2.hasOwnProperty(t.charAt(j))) {
      obj2[t.charAt(j)] += 1;
    } else {
      obj2[t.charAt(j)] = 1;
    }
  }
  for (let property in obj1) {
    if (obj1[property] !== obj2[property]) return false;
  }

  return true;
}
