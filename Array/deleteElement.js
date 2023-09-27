function deleteDivisibleElements(arr) {
    // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY
    let result=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2 !=0 && arr[i]%3!=0){
          result.push(arr[i])
      }
    }
    return result;
  }
  console.log(deleteDivisibleElements([1,2,3,4,5,6,78,9]))