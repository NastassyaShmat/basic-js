const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let a = array[i];
        console.log(a);
        count = count + 1;
        depth(array[i]);
      }
    }
    console.log(count);

    function depth(a) {
      for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
          count = count + 1;
          depth(a[i]);
        }
      }
    }
    return count;
    //throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
};
