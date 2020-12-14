// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 let words =[];
 for(let ele of str.split(' ')) {
    console.log('e',ele[0]);
    words.push(ele[0].toUpperCase()+ele.slice(1));
 }
 return words.join(' ');

}

module.exports = capitalize;
