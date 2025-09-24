const add = function(a, b) {
  return a+b;

};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => {
    return total+num
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {
    return total*num;
  }, 1);
};

const power = function(a, b) {
  return a**b;
};

function helper(num) {
  if (num === 0) {
    return 1;
  }
  return num * helper(num-1);
}
const factorial = function(num) {
	// return helper(num);
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res *= i;
  }
  return res

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
