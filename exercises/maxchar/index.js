// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxChar = ''
    for (let char of str) {
        // if(!chars[char]) {
        //     chars[char] = 1
        // }
        // else{
        //     chars[char] += 1
        // }
        //or
        chars[char] = chars[char] + 1 || 1;
    }
    for(obj in chars) {
        if(chars[obj]>max){
            max = chars[obj];
            maxChar = obj;
        }
    }
    return maxChar;
}

module.exports = maxChar;
