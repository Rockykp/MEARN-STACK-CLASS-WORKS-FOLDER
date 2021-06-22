// print all primenumbers between 3 - 25

//3....25

var low = 21, up = 40; // 23,29,31,37,

for (let num = low; num <= up; num++) { // num=21 ....... 40

    // num=21;
    let flag = 0;
    for (let j = 2; j < num; j++) { 
        if (num % j == 0) { 
            flag++; 
            break
        }
    }
    if (flag == 0) {
        console.log(num);
    }
}