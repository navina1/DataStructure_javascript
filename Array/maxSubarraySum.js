function maxSubArraySum(arr){
    let sum=arr[0];
    let maxSum=arr[0];
    for(i=1;i<arr.length;i++){
        sum=sum+arr[i];
        if(sum>0){
            maxSum = Math.max(sum,maxSum);
        }else{
            sum=0;
        }
    }
    return maxSum;
}
console.log("Max Sum is: "+ maxSubArraySum([2,-8,1,3,9,-4,4,5]));