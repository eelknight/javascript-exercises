const fibonacci = function(num) {
    if(num<0) {
        return "OOPS"
    }
    let a=0
    let b=1
    let answer=0
    for(let i=0;i<num;i++){
      answer= (a)+(b)
      a=b
      b=answer
       
    }  
    return a
};
// Do not edit below this line
module.exports = fibonacci;
