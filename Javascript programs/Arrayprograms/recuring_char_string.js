var string = "ABACBC";
var flag = 0;
for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {

        if (string[i] == string[j]) { 
            console.log(string[i]);
            flag = 1;
        }
    }
    if (flag == 1) {
    break; // first recuring character // break removed => all recuring characters will print.
    }
}