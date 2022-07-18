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

console.log(runningSum([1, 2, 3, 4, 5]));
