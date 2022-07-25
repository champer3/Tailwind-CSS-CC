// Write a function which takes in a string and returns counts of each character in a string

function countChar(str) {
  // Create an empty object
  let obj = {};
  // Convert the string to lowercase and remove every non-alphabetical and non-numerical characters
  let lstr = str.toLowerCase().replace(/\s+/g, "");
  // Loop over the String
  for (let i = 0; i < lstr.length; i++) {
    // Check if the current string is a key in the object
    if (lstr[i] in obj) {
      obj[lstr[i]]++;
    } else {
      // If the current string is not present, create a new key and set it's property to 1
      obj[lstr[i]] = 1;
    }
  }
  // Retun the object
  return obj;
}

// console.log(countChar("Hello there")); //{ h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 }

// Making an Object from an Array

let arr = [2, 3, 4, 6, 7, 7];

let obj = {};
for (key of arr) {
  obj[key] = (obj[key] || 0) + 1;
}
// console.log(obj);

// ........................................  FREQUENCY COUNTER  ....................................................

// Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of the value must be the same

// Big O of n 0(n^2) solution

function same(arr1, arr2) {
  // First Check: Rerturn false if the length of both arrays are different
  if (arr1.length !== arr2.length) {
    return false;
  }
  //  Second Check: Loop over the first array and check if each of the values times 2 is present in the second array
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    //  Third Check: Remove the checked value to avoid repetition
    arr2.splice(correctIndex, 1);
  }
  // Return true if all the steps above is passed
  return true;
}

// Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of the value must be the same

// Big O of n 0(n^2) solution

function same2(arr1, arr2) {
  // First Check: Rerturn false if the length of both arrays are different
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Second Check: Create an empty object
  let obj1 = {};
  let obj2 = {};
  //Third Check: For both objects, make the array value the key and its frequency, the property
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  // Fourth Check: Loop over the keys in Obj1 amd check if same key is present in obj2 (Key * 2)
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    // Fifth Check: Check if the frequency of key in Obj1 is the same with (key*2) in obj 2
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }
  // Return true if all the steps above is passed
  return true;
}

// console.log(same2([2, 6], [4, 36]));

var runningSum = function (nums) {
  //Create a new array
  let newArr = [];
  //Loop over the array
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] + newArr[i - 1] || nums[i];

    newArr.push(num);
  }
  return newArr;
};

// console.log(runningSum([1, 2, 3, 4, 5]));

function anagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s+/g, "");
  str2 = str2.toLowerCase().replace(/\s+/g, "");
  if (str1.length !== str2.length) {
    return false;
  }
  let strObj1 = {};
  let strObj2 = {};
  for (let el of str1) {
    strObj1[el] = (strObj1[el] || 0) + 1;
  }
  for (let el of str2) {
    strObj2[el] = (strObj2[el] || 0) + 1;
  }
  for (let val in strObj1) {
    if (!(val in strObj2)) return false;
    if (strObj1[val] !== strObj2[val]) return false;
  }

  return true;
}

// console.log(anagram("zazu", "uzaz"));

// ........................................  MULTIPLE POINTERS  ....................................................

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4]));

function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3, 4]));

// Write a function called countUniqueValues, which accepts an Array and counts the number of unique values in the Array

//Refactored Solution - Big O of n 0(n) solution

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return left + 1;
}

// console.log(
//   countUniqueValues([1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8])
// );

//Write a function which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array
// Big O of n^2 0(n^2) solution

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10

//Write a function which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array
//Refactored Solution - Big O of n 0(n) solution

function maxSubarraySum1(arr, n) {
  if (n > arr.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)); // 10

function sameFrequency(n, m) {
  // good luck. Add any arguments you deem necessary.
  let nText = n.toString();
  let mText = m.toString();
  if (nText.length !== mText.length) return false;
  let nObj = {};
  let mObj = {};
  for (let i = 0; i < nText.length; i++) {
    nObj[nText[i]] = nObj[nText[i]] + 1 || 1;
  }
  for (let i = 0; i < mText.length; i++) {
    mObj[mText[i]] = mObj[mText[i]] + 1 || 1;
  }
  for (let key in nObj) {
    if (!(key in mObj)) {
      return false;
    }
    if (nObj[key] !== mObj[key]) {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(122, 132));

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and check whether there are any
// duplicates among the arguments passed in. 

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let obj = {};
  for (val in arguments) {
    obj[arguments[val]] = obj[arguments[val]] + 1 || 1;
  }
  for (key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}

function areThereDuplicatess(...args) {
  let sortted = args.sort((a, b) => a > b);
  console.log(sortted);
}

// console.log(areThereDuplicates(1, 2, 3, 5, 4, 5));
areThereDuplicatess(2, 1, 3, 5, 4, 5);
