const removeFromArray = function(arr,...del) {
    return arr.filter(x=> !del.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
