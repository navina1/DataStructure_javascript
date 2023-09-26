function trappingwater(arr){
    let sum=0;
    let n=arr.length;
    for (let i = 1;i<n-1;++i) {
        let maxL=0;
        let maxR=0;
        for(let j=i-1;j>=0;j--){
            maxL=Math.max(maxL,arr[j]);
        }
        for(let k=i+1;k<n;k++){
            maxR=Math.max(maxR,arr[k]);
        }
        if(Math.min(maxL,maxR)-arr[i]>0){
            console.log(maxL,"maxl");
            console.log(maxR,"maxr")
            sum=sum+(Math.min(maxL,maxR)-arr[i])
        }
    }
    return sum;
}
console.log('trapping water',trappingwater([3,0,0,2,0,4]));