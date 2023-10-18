const date = new Date().getFullYear();
const findTheOldest = function (people) {
   const age = people.reduce((previous,current)=>{
    return (current.yearOfDeath || date) - current.yearOfBirth  < (previous.yearOfDeath || date) - previous.yearOfBirth ? previous : current
   })
   return age
};
// Do not edit below this line
module.exports = findTheOldest;
