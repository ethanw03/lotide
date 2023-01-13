let eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  } return true;
}

let assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed!: ${arr1} = ${arr2}!`)
  }
  else {
    console.log(`Assertion Failed!: ${arr1} != ${arr2}`)
  }
}

let middle = function (array) {
  let evenNumber = array.length % 2 === 0;
  let median = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else if (evenNumber) {
    return [array[median - 1], array[median]]
  } else {
    return [array[median]]
  }
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 6])