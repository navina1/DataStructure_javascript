function firstIndexOfOccurrenceRecursive(arr, target, index) {
    // TODO: Implement the recursive function
    if(arr[index]==target){
      return index
    }
    if (index == arr.length) {
        return -1
    }
    return firstIndexOfOccurrenceRecursive(arr,target,index+1)
    
  }
  
  
  function firstIndexOfOccurrenceMain(arr, target) {
    // TODO: Implement the main function
    return firstIndexOfOccurrenceRecursive(arr,target,0)
}
  
console.log(firstIndexOfOccurrenceMain([1,2,3,4,5],2))