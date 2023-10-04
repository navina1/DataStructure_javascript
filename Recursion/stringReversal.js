function reverseString(str) {
    // TODO: Implement your code here
    if(str.length<=1){
      return str;
    }
    return reverseString(str.slice(1))+str[0]
}
console.log(reverseString("helloo"))