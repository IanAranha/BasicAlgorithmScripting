//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target){
    let newStr = str.slice(str.length - target.length)
    if (newStr != target){
        return false
    }
    return true
}

//confirmEnding("Bastian", "n") should return true.
console.log(confirmEnding("Bastian", "n"));

//confirmEnding("Congratulation", "on") should return true.
console.log(confirmEnding("Congratulation", "on"));

//confirmEnding("Connor", "n") should return false.
console.log(confirmEnding("Connor", "n"));

////confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

////confirmEnding("He has to give me a new name", "name") should return true.
console.log(confirmEnding("He has to give me a new name", "name"));

////confirmEnding("Open sesame", "same") should return true.
console.log(confirmEnding("Open sesame", "same"));

////confirmEnding("Open sesame", "pen") should return false.
console.log(confirmEnding("Open sesame", "pen"));

////confirmEnding("Open sesame", "game") should return false.
console.log(confirmEnding("Open sesame", "game"));

////confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

////confirmEnding("Abstraction", "action") should return true.
console.log(confirmEnding("Abstraction", "action"));






