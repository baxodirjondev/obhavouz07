const api = {
    key: '1b581e357fe170a22c889d9141266e6d',
    baseurl:"https://api.openweathermap.org/data/2.5/",
};

const seacrhBox = document.querySelector('.box');
seacrhBox.addEventListener('keypress', setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(seacrhBox.value);
        console.log(seacrhBox.value);
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(
        (weather)=>{
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = (`${weather.name}, ${weather.sys.country}`);
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerHTML = dateBuilder(now)

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weatherEl = document.querySelector(".weather");
    weather.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector(".hilow");
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}
function dateBuilder(s) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

let day = days[s.getDay()];
let date = s.getDate()
let month = months[s.getMonth()];
let year = s.getFullYear();

return (`${day} ${date} ${month} ${year}`); 
}
























//  city.innerHTML = (`${weather.name}, ${weather.sys.country}`);

// //     let now = new Date();
// //     let data = document.querySelector('.location .date');
// //     Date.innerHTML = dateBuilder(now);

// //     let temp = document.querySelector('.temp')
// //    

// //     let weatherEl = document.querySelector('.weather');
// //     weatherEl.innerHTML = weather.weather[0].main;

// //     let hilow = document.querySelector(".hi-low");
// //     hilow.innerHTML = 
// // }

// // function dateBuilder(b) {


// //     let day = days[b.getDay()];
// //     let date = b.getDate()
// //     let month = months[b.getMonth()];
// //     let year = s.getFullYear();

// // }