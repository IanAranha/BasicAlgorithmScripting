//Check if a value is classified as a boolean primitive. Return true or false.
//
//Boolean primitives are true and false.


function booWho(bool) {
    if(bool === true || bool === false)
        return true;
    else
        return false
}

console.log(booWho(null))
//booWho(true) should return true.
console.log(booWho(true))
//booWho(false) should return true.
console.log(booWho(false))
//booWho([1, 2, 3]) should return false.
console.log(booWho([1,2,3]))
//booWho([].slice) should return false.
console.log(booWho([].slice))
//booWho({ "a": 1 }) should return false.
console.log(booWho({ "a": 1 }))
//booWho(1) should return false.
console.log(booWho(1))
//booWho(NaN) should return false.
console.log(booWho(NaN))
//booWho("a") should return false.
console.log(booWho("a"))
//booWho("true") should return false.
console.log(booWho("true"))
//booWho("false") should return false.
console.log(booWho("false"))