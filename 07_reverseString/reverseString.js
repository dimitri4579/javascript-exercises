const reverseString = function(string) {
    let ret = [];
    for (let i = string.length - 1; i >= 0; i--) {
        ret.push(string[i]);
    }
    return ret.join('');
};

// console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
