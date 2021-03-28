//const CustomError = require("../extensions/custom-error");

module.exports = function transform(a) {
  let k = a.map(function name(number) {
    
    if (a.length === 0){
      return number;
    }
    if (number === '--double-next') {
      m = a.indexOf('--double-next');
      if (m === a.length-1) {
        number = 'delete';
       return number;
      }
   number = a[m+1];
      return number;
   }
    if (number === '--double-prev') {
      m = a.indexOf('--double-prev');
      if (m === 0) {
        number = 'delete';
       return number;
      }  
   number = a[m-1];
   
      return number;
     }
    if (number === '--discard-next') {
     m = a.indexOf('--discard-next');
     if (m === a.length-1) {
      number = 'delete';
     return number;
    }
      a[m+1]= 'delete';
      number = 'delete';
       return number;
   }
    if (number === '--discard-prev') {
     m = a.indexOf('--discard-prev');
     if (m === 0) {
      number = 'delete';
     return number;
    }           number = 'delete2';
        return number;
   }
  return number;
   })
 for (let i = 0; i < k.length; i++) {
   if (k[i] === 'delete2') {
     k[i]= 'delete';
     k[i-1] = 'delete';
   }
 }
 function elete(num) {
     return num !== 'delete';
   }
   return k.filter(elete);
  };
