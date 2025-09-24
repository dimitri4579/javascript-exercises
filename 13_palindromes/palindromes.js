const palindromes = function (string) {
    let left = 0;
    let right = string.length;

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    string = string.toLowerCase();
    while (left <= right) {
        if (!alphanumerical.includes(string[left])) {
            left+=1;
        } else if (!alphanumerical.includes(string[right])) {
            right -=1;
        } else {
            if (string[left] != string[right]){
                return false;
            }
            left+=1;
            right-=1;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
