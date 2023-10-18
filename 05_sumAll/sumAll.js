const sumAll = function(a,b) {
  let total =0;
   if (!Number.isInteger(a) || !Number.isInteger(b)||a<0||b<0) return "ERROR";
    
   else if(a<b){
        for(let i=a-1;i<b+1;i++){
                total+=i
        } return total
    }else if(a>b) {
        for(let i=b-1;i<a+1;i++){
            total+=i
        }  return total  
    }else
return "ERROR"
};


// Do not edit below this line
module.exports = sumAll;
