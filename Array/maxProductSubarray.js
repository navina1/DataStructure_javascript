function maxProductSubarray(elements) {
    // PLACEHOLDER_JAVASCRIPT_MAX_PRODUCT_SUBARRAY_BODY
    let product=1;
    let maxProduct=1;
    let n=elements.length;
    for(let i=0;i<n;i++){
      product=product*elements[i];
      //console.log(product)
      if(product!=0){
        maxProduct=Math.max(maxProduct,product);
      }else{
        product=1;
      }
    }
    return maxProduct;
}
console.log(maxProductSubarray([1,2,-3,0,-4,1]))