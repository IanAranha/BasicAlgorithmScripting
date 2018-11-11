function findLongestWordLength(str) {
    let newStr = str.split(" ")

    let longestword = newStr[0]
    
    for(let x = 1; x < newStr.length; x++){
        if(newStr[x].length > longestword.length){
            longestword = newStr[x]
        }
    }
    return longestword.length
}
    


//findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//findLongestWordLength("May the force be with you") should return 5.
console.log(findLongestWordLength("May the force be with you"))

//findLongestWordLength("Google do a barrel roll") should return 6.
console.log(findLongestWordLength("Google do a barrel roll"))

//findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))

//findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));