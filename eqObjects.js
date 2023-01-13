let eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i <= arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  }return true;
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed✅: ${actual}  ===  ${expected}")
  } else {
    console.log("⚠️Assertion Failed⚠️: ${actual} ${expected}")
  }
};

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


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false