// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let value =str.split('').reverse().join('');
    // return value; 
    // or
    // let reverse = ''
    // for (let char of str) {
    //     reverse = char + reverse;
    // }
    //return reverse;
    //or
    return str.split('').reduce((reverse,character)=>{
        
        return  character+reverse;
    },'')
   

}

module.exports = reverse;
