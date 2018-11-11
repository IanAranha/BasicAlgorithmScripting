//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    let lower = str.toLowerCase();
    let breakup = lower.split(" ")
    let newStr = ""
    for (var i= 0 ; i<breakup.length; i++){
        let firstletter = breakup[i][0].toUpperCase()
        let restofword = breakup[i].slice(1)
        let newCombo = firstletter + restofword
        newStr+=newCombo + " "
        }
    let brandNewStr = newStr.trim()
    return brandNewStr
}

//titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
console.log(titleCase("test test1 test2 test3"));

////titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
console.log(titleCase("I'm a litTle tea pot"));

//titleCase("sHoRt AnD sToUt") should return Short And Stout.
console.log(titleCase("sHoRt AnD sToUt"));
//
////titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));