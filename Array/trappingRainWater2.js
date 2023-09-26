function maxRainwater2(arr){
    let n=arr.length;
    let maxleft=new Array(n).fill(0);
    let maxRight=new Array(n).fill(0);
    maxleft[0]=arr[0];
    maxRight[n-1]=arr[n-1];
    for(let i=1;i<n;i++){
        maxleft[i]=Math.max(maxleft[i-1],arr[i]);
    }
    for(let j=n-2;j>=0;j--){
        maxRight[j]=Math.max(maxRight[j+1],arr[j]);
    }
    let waterTapped=0;
    for (let k = 0; k < arr.length ;k++) {
        if(Math.min(maxleft[k-1],maxRight[k+1])-arr[k]>0){
            waterTapped=waterTapped+Math.min(maxleft[k-1],maxRight[k+1])-arr[k]
        }
    }
    return waterTapped
}
console.log("water Tapped ",maxRainwater2([3,0,0,2,0,4]))