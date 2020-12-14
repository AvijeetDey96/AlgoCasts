// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//     console.log(stringA, stringB);
//     let obj1 = {}
//     let obj2 = {}

//     for (let str of stringA) {
//         obj1[str] = obj1[str] + 1 || 1;
//     }
//     for (let str of stringB) {
//         obj2[str] = obj2[str] + 1 || 1;
//     }

//     console.log(obj1, obj2);
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for(let char in obj1) {
//         if(obj1[char] !== obj2[char]) {
//             return false;
//         }
//         return true;
//     }

// }


function anagrams(stringA, stringB) {
    return clearString(stringA) === clearString(stringB);
}


function clearString(str) {
     return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
