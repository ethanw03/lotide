const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: ${actual}  ===  ${expected}`)
  } else {
    console.log(`⚠️Assertion Failed⚠️: ${actual} !== ${expected}`)
  }
};

const countLetters = function(sentence){
  const result = {};
  for(const letters of sentence){
    if(letters === ' '){
      continue;
    }
    if (result[letters]){
      result[letters] = ++result[letters];
    }else{
      result[letters] = 1;
    }
  }return result 
}

