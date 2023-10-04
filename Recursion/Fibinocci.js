//0,1,1,2,3,5,8,12
function fibnocci(n) {
    if (n == 1 || n == 2) {
        return n - 1;
    }
    return fibnocci(n - 1) + fibnocci(n - 2);
}
console.log(fibnocci(6))