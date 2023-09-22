function subArray(arr,start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum=sum+arr[i];
    }
    return sum
}
function allSubArray(arr){
    let n=arr.length;
    let sum=0;
    for(let i=0;i<n;i++){
        
        for(let j=i;j<n;j++){
           sum=sum+subArray(arr,i,j);
        }
        
    }
    console.log(sum)
}
allSubArray([1,2,3,4]);