//Remove all falsy values from an array.
//
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
//Hint: Try converting each value to a Boolean.


function bouncer(arr){
    newArr = arr.filter(Boolean)
    return newArr;
    }

test1=[7, "ate", "", false, 9]
test2=["a", "b", "c"]
test3=[false, null, 0, NaN, undefined, ""]
test4=[1, null, NaN, 2, undefined]


//bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
console.log(bouncer(test1))
//bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
console.log(bouncer(test2))
////bouncer([false, null, 0, NaN, undefined, ""]) should return [].
console.log(bouncer(test3))
////bouncer([1, null, NaN, 2, undefined]) should return [1, 2]
console.log(bouncer(test4))