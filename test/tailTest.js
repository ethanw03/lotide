const tail = require('../tail')
const assertEqual = require('../assertEqual')

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const oneItem = tail(["hi"]);
assertEqual(oneItem.length, 0);

const emptyArr = tail([]);
assertEqual(emptyArr.length, 0);