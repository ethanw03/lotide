const eqObjects = function(object1, object2){
  let object1Array = Object.keys(object1);
  let object2Array = Object.keys(object2);
    if(object1Array.length !== object2Array.length){
      return false;
    }
  for (const key in object1Array){
    if(Array.isArray(object1[key]) || Array.isArray(object2[key])){
      if(!eqArrays(object1[key], object2[key])){
        return false
      }
    }
    if(object1[key] !== object2[key]){
      return false;
    }
  } return true
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(actual, expected)){
    console.log(`✅Assertion Passed✅: ${inspect(actual)}  ===  ${inspect(expected)}`)
  } else {
    console.log(`⚠️Assertion Failed⚠️: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertObjectsEqual(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertObjectsEqual(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false




