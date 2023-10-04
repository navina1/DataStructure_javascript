function exponentiation(x, p) {
    // TODO: Implement your code here
    if (p==0){
      return 1;
    }
      if (p < 0) {
          x = 1 / x;
          p = -p;
      }
    let result= x*exponentiation(x,p-1);
    return Number(result.toFixed(2))
}
  console.log(exponentiation(10,-2))