function powerOf2(n) {
    if (n == 1) {
        return 2;
    }
    let x = Math.floor(n / 2);
    if (n % 2 == 0) {
        return powerOf2(x) * powerOf2(x);
    } else {
        return 2 * powerOf2(x) * powerOf2(x);
    }
}
console.log(powerOf2(3));