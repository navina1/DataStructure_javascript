function subsequenceRecursive(str, index,result,temp){
    //TODO: Implement the subsequenceRecursive function
    if(index==str.length){
        result.push(temp.join(""))
    }else{
        subsequenceRecursive(str,index+1,result,[...temp,str[index]]);
        subsequenceRecursive(str,index+1,result,temp)
    }
    return result

}function subsequenceMain(str) {
   //TODO: Implement the subsequenceMain function
   let result=[];
   let temp=[];
   return subsequenceRecursive(str,0,result,temp)
}
console.log("Subsequences of string are : ",subsequenceMain('abc'))