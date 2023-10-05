function generateNDigitNumbers(inputDigits, n) {
    let result = [];
    function backTrack(path) {
        if (path.length == n) {
            result.push(Number(path.join("")));
            return
        }
        for(let digit of inputDigits){
            path.push(digit);
            backTrack(path);
            path.pop();
        }
    }
    backTrack([])
    return result
}

const inputDigits = [1, 2];
const n = 3;
const output = generateNDigitNumbers(inputDigits, n);
console.log(output);