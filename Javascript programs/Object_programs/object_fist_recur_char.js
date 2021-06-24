var pattern = "ABABC"

var dict = {};

for (let char of pattern) {

    if (!(char in dict)) {
        dict[char] = 1;  
    }
    else {
        console.log("first recuring char is " + char);
        break;
    }
}