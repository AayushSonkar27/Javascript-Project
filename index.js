let cityname = document.getElementById('cityName')
let cityValue = document.getElementById('cityValue')
let countryname = document.getElementById('CountryName')
let temparature = document.getElementById('temp')

let search = async()=> {
    if (cityValue.value.length == 0) {
        alert('please enter a city name');
    } else {

        try {
            // api call
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityValue.value + "&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
            let response = await fetch(url);
            let data = await response.json();
            cityname.textContent = data.name;
            countryname.textContent = data.sys.country
            temparature.textContent = data.main.temp;
            console.log(data.name);
        } catch {
            alert("please entered the  vaild city")
        }
    }
}