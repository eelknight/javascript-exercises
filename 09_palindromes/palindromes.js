const palindromes = function (word) {
    return (word.split("").reverse().join("").replace(/[^a-zA-Z0-9]/gi,"").toLowerCase()===word.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase())
    

};

// Do not edit below this line
module.exports = palindromes;
