function checkSlot(){
    let ag=document.querySelector("#age").value;
    //let html_data=ag<18?"not eligible" : "eligible";
    // document.querySelector("#result").innerHTML=`<p style="color:red"> ${html_data}</p>`

    if(ag<18){
        result.innerHTML=`<h2 style=color:red> Not Eligible </h2>`
    }
    else{
        result.innerHTML=`<h2 style=color:green> Eligible </h2>`
    }
}