
var num1 = 63, num2 = 14;

let result;
for (let i = 1; i <= num1; i++) {
    if ((num1 % i == 0) & (num2 % i == 0)) {
        result = i;
    }
}
console.log(result);