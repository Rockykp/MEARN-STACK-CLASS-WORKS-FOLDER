//Hollow Pyramid program
// 17th July class end time explaining this program. 

for (let row = 1; row <= 5; row++) {
    let str = "";
    for (let col = 1; col <= 9; col++) {
        if ((row == 5) || (row + col == 6) || (col - row == 4)) {
            str += "*";
        }
        else {
            str += " ";
        }
    }
    console.log(str);
}


// var rowz = 30, star = "";
// for (let i = 1; i <= rowz; i++) {
//     star = ""
//     for (let j = i; j < rowz; j++) {
//         star += " ";
//     }
//     for (let k = 1; k <= (2 * i - 1); k++) {
//         if (i == rowz || k == 1 || k == (2 * i - 1)) {
//             star += "*";
//         }
//         else {
//             star += " ";
//         }
//     }
//     console.log(star);
// }






