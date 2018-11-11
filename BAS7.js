//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let newstr = ""
    if(num <= 0){
        return newstr
    } else {
        for(let i=0 ; i < num ; i++){
            newstr+=str
        }
  }
  return newstr;
}

//repeatStringNumTimes("abc", 3) should return "abcabcabc"
console.log(repeatStringNumTimes("abc", 3));

//repeatStringNumTimes("*", 3) should return "***"
console.log(repeatStringNumTimes("*", 3));

//repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 4));

//repeatStringNumTimes("abc", 1) should return "abc"
console.log(repeatStringNumTimes("abc", 1));

//repeatStringNumTimes("*", 8) should return "********".
console.log(repeatStringNumTimes("*", 8));

//repeatStringNumTimes("abc", -2) should return "".
console.log(repeatStringNumTimes("abc", -2));
