// add solution here
let beatles = [
  "John Lennon",
  "Paul McCartney",
  "Ringo Starr",
  "George Harrison"
];

let beatlesInstruments = [
  "guitar",
  "piano",
  "drums",
  "bass"
];

var theBeatlesPlay = function(arr1, arr2) {
  let finalArr = [];
  for (let i = 0; i < beatles.length; i++) {
    finalArr.append(
      `${beatles[i]} plays ${beatlesInstruments[i]}.`
    );
    console.log(`${beatles[i]} plays ${beatlesInstruments[i]}.`);
  }
  return finallArr;
};
