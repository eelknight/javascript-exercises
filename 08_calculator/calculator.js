const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
	let total=0
  a.forEach(element => {
    total+=element
  });
  return total
};

const multiply = function(a) {
  return a.reduce((sum,current) => sum * current)
};

const power = function(a,b) {
	let answer=a
  for(let i =1;i<b;i++){
    answer*=a
  }
  return answer
};

const factorial = function(a) {
  let answer=a
  if(a===0){
    return 1
  }else{
 
  for(let i =a-1;i>0;i--){
    answer*=i
  }
  }
  return answer
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
