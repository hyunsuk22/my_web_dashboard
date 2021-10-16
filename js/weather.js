
const API_KEY = "b887e6dbe988596657a27e5464261f7b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;

        //html에 뿌려주기
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;   
        city.innerText = data.name;
    })); // 자바스크립트가 url을 부름.
}

function onGeoError(){
    alert("can't find you. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//api b887e6dbe988596657a27e5464261f7b
