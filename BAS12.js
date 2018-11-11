//You are given two arrays and an index.
//
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//
//Begin inserting elements at index n of the second array.
//
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    newarr = arr2.slice(0, n)
    for (let i = 0; i< arr1.length; i++){
        newarr.splice(newarr.length,0,arr1[i])
        }
    for( let i = n; i < arr2.length; i++)
        {
            newarr.splice(newarr.length, 0, arr2[i])
        }
    return newarr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 3));

//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2, 3], [4, 5], 1))

//frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2], ["a", "b"], 1));

//frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));