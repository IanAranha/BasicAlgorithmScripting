//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size){
    let newArr = []
    while(arr.length != 0){
        newArr.push(arr.slice(0, size))
        for( let i=0; i < size; i++){
            arr.shift()
        }
    }
    return(newArr)
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))