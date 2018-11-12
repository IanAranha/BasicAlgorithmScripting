//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).



function getIndexToIns(arr, num) {
    let nextIndex = 0;
    arr.sort(function(a,b){return a - b})
    if(arr[0] == undefined || arr[0] >= num)
        return 0
    if(arr[arr.indexOf(arr[arr.length-1])] < num){
        nextIndex = arr.indexOf(arr[arr.length-1]) + 1
        return nextIndex;
        }   
    for(let i=0 ; i < arr.length ; i++){
        if(arr[i] >= num){
            return arr.indexOf(arr[i])
        } 
    }
}

//////getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
////
//////getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
////
//////getIndexToIns([40, 60], 50) should return 1.
console.log(getIndexToIns([40, 60], 50))
////
//////getIndexToIns([3, 10, 5], 3) should return 0.
console.log(getIndexToIns([3, 10, 5], 3))
////
//////getIndexToIns([5, 3, 20, 3], 5) should return 2.
console.log(getIndexToIns([5, 3, 20, 3], 5))
////
//////getIndexToIns([2, 20, 10], 19) should return 2.
console.log(getIndexToIns([2, 20, 10], 19))
//
////getIndexToIns([], 1) should return 0.
console.log(getIndexToIns([], 1))
//            
//////getIndexToIns([40, 60], 50) should return 1.
console.log(getIndexToIns([40, 60], 50))
////            
//////getIndexToIns([3, 10, 5], 3) should return 0.
console.log(getIndexToIns([3, 10, 5], 3))
////            
//////getIndexToIns([5, 3, 20, 3], 5) should return 2.
console.log(getIndexToIns([5, 3, 20, 3], 5))
////            
//////getIndexToIns([2, 20, 10], 19) should return 2.
console.log(getIndexToIns([2, 20, 10], 19))
//            
////getIndexToIns([2, 5, 10], 15) should return 3.
console.log(getIndexToIns([2, 5, 10], 15))       
//            
