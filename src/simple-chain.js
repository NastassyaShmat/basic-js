//const CustomError = require("../extensions/custom-error");
let arr = [];
const chainMaker = {
  getLength() {
    arr.length;
    return arr;
  },
  addLink(value) {
    arr.push(String(value));
    return arr;
  },
  removeLink(position) {
    position = position - 1;
    arr.splice(position, 1);
    return arr;
  },
  reverseChain() {
    arr.reverse();
    return arr;
  },
  finishChain() {
    arr.join("");
    return arr;
  },
};

module.exports = chainMaker;
