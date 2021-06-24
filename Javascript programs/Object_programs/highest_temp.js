var temperature = [
    { district: "tvm", temp: 25 },
    { district: "kollam", temp: 27 },
    { district: "kottayam", temp: 24 },
    { district: "ekm", temp: 27 },
    { district: "tsr", temp: 36 },
    { district: "pkd", temp: 30 },
    { district: "tvm", temp: 27 },
    { district: "kollam", temp: 25 },
    { district: "kottayam", temp: 28 },
    { district: "ekm", temp: 29 },
    { district: "tsr", temp: 30 },
    { district: "pkd", temp: 31 },
]
var weather = {};  // empty object to store value and property

for (let data of temperature) {  // this will add first data set to data

    let district = data["district"]; // district will have first data set district name

    let temp = data["temp"]; // temp will have the temp value of the first data set

    if (!(district in weather)) {

        weather[district] = temp;

    }

    else {

        let old_Temp = weather[district];

        if (old_Temp < temp) {

            weather[district] = temp;

        }
        else {

            weather[district] = old_Temp;
        }

    }
}
console.log(weather); 

function sortByTemp(data){   //{ tvm: 27, kollam: 27, kottayam: 28, ekm: 29, tsr: 36, pkd: 31 }
    return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist1[1]) //{ [tvm: 27], [kollam: 27], [kottayam: 28], [ekm: 29], [tsr: 36], [pkd: 31] } // entries will sort objects in array format
}

console.log(sortByTemp(weather));



//sort weather according to temprature in decending order
// district highest temprature
