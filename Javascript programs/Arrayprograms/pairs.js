// print pairs of the given element from an array
var arr = [1,2,3,4,5,6,7,8,9];
var elem = 9;
//var cnt = 0;
var low = 0, upp = arr.length - 1;

while (low < upp) {
    let total = arr[low] + arr[upp];

    if (elem == total) {

        console.log(`pairs are ${arr[low]},${arr[upp]}`);
        low++;
    }
    else if (elem > total) {

        low = low + 1;

    }
    else if (elem < total) {

        upp = upp - 1;

    }
    //cnt++;
}

//console.log(cnt);


// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let total = arr[i] + arr[j];
//         if (elem == total) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// for (let num1 of arr) {
//     for (let num2 of arr) {
//         let total = num1 + num2;
//         if (elem == total) {
//             console.log(`pairs are ${num1} ${num2}`);
//         }
//     }
// }
