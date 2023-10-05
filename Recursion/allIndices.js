function indicesRecursive(arr, target, index,result) {
    //TODO: Implement the indicesRecursive funtion
       if(index==arr.length){
         return result
       }
       if(arr[index]==target){
         result.push(index)
       }
       return indicesRecursive(arr,target,index+1,result)
}
   
function indicesMain(arr, target) {
      //TODO: Implement the indicesMain funtion
      let result=[];
      return indicesRecursive(arr,target,0,result)
}
console.log(indicesMain([1,2,3,2,4,2,5],2))