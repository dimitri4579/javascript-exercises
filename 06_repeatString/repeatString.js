const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let ret = [];
    for (let i = 0; i < num; i++) {
        ret.push(string);
    }
    return ret.join('');
};

// console.log(repeatString('hi', 4));

// Do not edit below this line
module.exports = repeatString;
