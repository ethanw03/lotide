const eqArrays = require('./eqArrays')
let assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)){
    console.log(`Assertion Passed!: ${arr1} = ${arr2}!`)
  }
  else{console.log(`Assertion Failed!: ${arr1} != ${arr2}`)
}
}
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 4], [1, 2, 3]);


module.exports = assertArraysEqual