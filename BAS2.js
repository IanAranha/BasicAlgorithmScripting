//Reverse the provided string.
//
//You may need to turn the string into an array before you can reverse it.
//
//Your result must be a string.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.


function reverseString(str) {
    let newstr = []
    let revstr = ""
    for( let x = str.length-1; x >= 0 ; x--){
        newstr.push(str[x])
    }
    for(let x = 0; x < newstr.length; x++){
        revstr += newstr[x]
    }
    return revstr;
}

//reverseString("hello") should become "olleh".
console.log(reverseString("hello"));

//reverseString("Howdy") should become "ydwoH".
console.log(reverseString("Howdy"));

//reverseString("Greetings from Earth") should return "htraE morf sgniteerG"
console.log(reverseString("Greetings from Earth"));