let eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i <= arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }return true;
}

let assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)){
    console.log(`Assertion Passed!: ${arr1} = ${arr2}!`)
  }
  else{console.log(`Assertion Failed!: ${arr1} != ${arr2}`)
}
}

const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  for( i = 0; i < sentence.length; i++){
   let letter = sentence[i];
   if (letter !== " "){
    if(!result[letter]){
      result[letter] = [i];
    }else if(result[letter])
      {result[letter].push(i);
    }
   }
  }
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);