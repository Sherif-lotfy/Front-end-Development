let convert = document.querySelector(".convert"),
selectList = document.querySelector("select"),
result = document.querySelector(".result"),
input = document.querySelector("input");

convert.onclick = function() {
    console.log(selectList.value);
    console.log(input.value);
    if(selectList.value == "Fahrenheit"){
        result.innerHTML = `<div class="appear">Temperature in Fehrenheit is : ${Fahrenheit(input.value)} </div>`
    }else if(selectList.value == "Kelvin"){
        result.innerHTML = `<div class="appear">Temperature in Kelvin is : ${Kelvin(input.value)} </div>`
    }else{
        result.innerHTML = `
        <div class="appear">Temperature in Fehrenheit is : ${Fahrenheit(input.value)} </div>
        <br>
        <div class="appear">Temperature in Kelvin is : ${Kelvin(input.value)} </div>
        `  
    }
}
function Fahrenheit(n) {
    return ((Number(n)*1.8)+32);
}
function Kelvin(n) {
    return (Number(n)+273);
}