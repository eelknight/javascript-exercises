const repeatString = function(string,num) {
  let words=""
  if(num<0){
    return "ERROR"
  }else
   for(let i=0;i<num;i++){
    words+=string.slice(0)
   }
   return words
};

// Do not edit below this line
module.exports = repeatString;