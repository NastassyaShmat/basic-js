//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let str = String(backyard).split(',');
  let arr = [];
for (let i = 0; i < str.length; i++){
    if (str[i] == '^^'){
        arr.push(i);
    }
}
return arr.length;

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
