/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  const firstWordLength = words[0].length;
  const restOfWordsLength = longest(words.slice(1));

  return Math.max(firstWordLength, restOfWordsLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) return str;
  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  return str[0].toLowerCase() === str[str.length - 1].toLowerCase() && isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) {
    return idx;
  }
  return findIndex(arr, val, idx + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings.push(...gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  }

  if (val < arr[mid]) {
    return binarySearch(arr, val, start, mid - 1);
  }

  if (val > arr[mid]) {
    return binarySearch(arr, val, mid + 1, end);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};