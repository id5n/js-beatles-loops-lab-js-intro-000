// add solution here
let beatles = [
  "John Lennon",
  "Paul McCartney",
  "Ringo Starr",
  "George Harrison"
];

let beatlesInstruments = [
  "Guitar",
  "Piano",
  "Drums",
  "Bass"
];

var theBeatlesPlay = function(arr1, arr2) {
  let finalArr = [];
  for (i = 0; i < beatles.length; i++) {
    console.log(`${beatles[i]} plays ${beatlesInstruments[i]}.`)
  }
};
