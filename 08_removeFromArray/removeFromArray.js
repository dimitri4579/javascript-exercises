const removeFromArray = function(array, ...theArgs) {
    // const ret = Array.from(array, (x) => {
    //     let seen = false;
    //     for (const arg of theArgs) {
    //         if (arg === x) {
    //             seen = true;
    //         }
    //     }
    //     if (seen === false) return x;
    // })

    // for (let i = ret.length; i >= 0; i--) {
    //     if (ret[i] == undefined) {
    //         ret.splice(i,1);
    //     }
    // }
    // return ret;

    return array.filter((word) => !theArgs.includes(word));
};


// Do not edit below this line
module.exports = removeFromArray;
