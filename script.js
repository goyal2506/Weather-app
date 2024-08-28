const btn = document.getElementById("Search-btn");
const inp = document.getElementById("city-inp");
let  type = document.getElementById("type");
let  Humadity = document.getElementById("Humadity");
let  wind = document.getElementById("wind");
let  image = document.getElementById("image");
let  temp_c = document.getElementById("temp_c");


async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=a88485f783ad432198943908242608&q=${cityName}&aqi=yes`);
    return await promise.json();
}

btn.addEventListener("click" , async() =>{
    const value = inp.value;
    const result = await getData(value);
    type.innerText=result.current.condition.text;
    Humadity.innerText=result.current.humidity+" %";
    wind.innerText=result.current.wind_kph+" km/h";
    image.src=result.current.condition.icon;
    temp_c.innerText=result.current.temp_c +"°C";
});